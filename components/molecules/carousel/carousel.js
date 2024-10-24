/**
 * Carousel
 */

// React
import React, { useEffect, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import Carouselnav from './components/nav'
import CarouselSampleSlide from './components/sample'
import Icon from '../../atoms/icon/icon/icon'
import Pagination from '../../molecules/pagination/pagination'
import revert from '../../utils/revert/revert'
import ResizeDetector from '../../utils/resizeDetector/resizeDetector'
import { CarouselDefaultProps, CarouselPropTypes } from './components/props'

let interval

const Carousel = ({
  navContext,
  navPosition,
  autoplay,
  autoplayInterval,
  children,
  fullWidth,
  gap,
  height,
  leftNavIcon,
  leftNavComponent,
  numberOfItems,
  paginationProps,
  paginationPosition,
  rightNavIcon,
  rightNavComponent,
  showNavs,
  showPagination,
  slides,
  width
}) => {
  let dataSource = slides || children

  dataSource = revert(dataSource)

  const [currentImageIndex, setCurrentImageIndex] = useState((slides || children).length - 1)
  const [NumberOfItems, setNumberOfItems] = useState(
    typeof numberOfItems === 'number' ? numberOfItems : 1
  )

  const resetNumberOfItems = (width) => {
    let found = false
    for (const key in numberOfItems) {
      if (width <= Number(key) && found === false) {
        found = true
        setNumberOfItems(numberOfItems[key])
      }
    }
    if (found === false) {
      setNumberOfItems(10)
    }
  }

  useEffect(() => {
    if (autoplay === true) {
      interval = setInterval(() => {
        nextSlide()
      }, autoplayInterval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [currentImageIndex])

  const previousSlide = () => {
    const lastIndex = dataSource.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1
    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = dataSource.length - 1
    const shouldResetIndex = currentImageIndex === NumberOfItems - 1
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1
    setCurrentImageIndex(index)
  }

  const renderPagination = () => (
    <PaginationWrapper>
      <Pagination
        currentPage={dataSource.length - currentImageIndex}
        nextLabel={<Icon icon="chevron-right" />}
        onPageChange={(page) => {
          setCurrentImageIndex(dataSource.length - page)
        }}
        pageCount={dataSource.length}
        prevLabel={<Icon icon="chevron-left" />}
        showNextAndPrev
        size="xs"
        {...paginationProps}
      />
    </PaginationWrapper>
  )

  const hasNavigation = Array.isArray(dataSource) && dataSource.length > 1

  const navComponents = () => {
    const components = {
      left: (
        <Carouselnav
          context={navContext}
          clickFunction={previousSlide}
          direction="left"
          icon={leftNavIcon}
          position={navPosition}
        />
      ),

      right: (
        <Carouselnav
          context={navContext}
          clickFunction={nextSlide}
          direction="right"
          icon={rightNavIcon}
          position={navPosition}
        />
      )
    }
    if (leftNavComponent) {
      components.left = (
        <NavWrapper componentPosition={navPosition} onClick={nextSlide}>
          {leftNavComponent}
        </NavWrapper>
      )
    }
    if (rightNavComponent) {
      components.right = (
        <NavWrapper componentPosition={navPosition} endNav onClick={previousSlide}>
          {rightNavComponent}
        </NavWrapper>
      )
    }

    return components
  }

  return (
    <>
      <Wrapper width={width} height={height} fullWidth={fullWidth}>
        {typeof numberOfItems !== 'number' && (
          <ResizeDetector onResize={({ width }) => resetNumberOfItems(width)} />
        )}

        {hasNavigation && showNavs && navComponents().left}

        {dataSource.map((item, index) => {
          return (
            <ItemWrapper
              gap={gap}
              width={`calc(${100 / NumberOfItems}% - ${gap}px)`}
              transform={`translateX(calc(${currentImageIndex - index} * calc(100% + ${gap}px)))`}
              key={'slide' + index}
            >
              {slides ? <CarouselSampleSlide {...item} /> : dataSource[index]}
            </ItemWrapper>
          )
        })}

        {hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination()}

        {hasNavigation && showNavs && navComponents().right}
      </Wrapper>

      {hasNavigation && showPagination && paginationPosition === 'outside' && renderPagination()}
    </>
  )
}

const ItemWrapper = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  ${({ gap, transform, width }) => css`
    margin-left: ${gap / 2}px;
    transform: ${transform};
    width: ${width};
  `}
`

const NavWrapper = styled.div`
  align-items: ${({ componentPosition }) =>
    componentPosition === 'top'
      ? 'flex-start'
      : componentPosition === 'bottom'
      ? 'flex-end'
      : 'center'};

  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;

  ${({ endNav }) =>
    endNav === true &&
    css`
      right: 0;
    `}
`
const Wrapper = styled.div`
  overflow: hidden;
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
`

const PaginationWrapper = styled.div`
  box-sizing: border-box;
  margin: 1rem 0;
  width: 100%;
`

Carousel.defaultProps = CarouselDefaultProps
Carousel.propTypes = CarouselPropTypes

export default Carousel
