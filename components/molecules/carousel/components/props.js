/**
 * Carousel - Props
 */

// React
import {
  any,
  arrayOf,
  bool,
  object,
  oneOf,
  oneOfType,
  node,
  number,
  shape,
  string
} from 'prop-types'

// UI
import THEME_CONTEXT from '../../../constants/context'
import { propTypes } from '../../pagination/props'

export const CarouselPropTypes = {
  navContext: oneOf(Object.values(THEME_CONTEXT)),
  navPosition: oneOf(['top', 'middle', 'bottom']),
  children: node,
  fullWidth: bool,
  gap: number,
  height: string,
  leftNavComponent: any,
  leftNavIcon: string,
  numberOfItems: oneOfType([object, number]),
  paginationProps: shape(propTypes),
  paginationPosition: oneOf(['inside', 'outside']),
  rightNavIcon: string,
  rightNavComponent: any,
  showNavs: bool,
  showPagination: bool,
  slides: arrayOf(
    shape({
      context: string,
      img: string,
      node: node,
      text: string
    })
  ),
  width: string
}

export const CarouselDefaultProps = {
  navContext: THEME_CONTEXT.BLACK,
  navPosition: 'middle',
  autoplay: false,
  autoplayInterval: 1000,
  fullWidth: false,
  gap: 10,
  leftNavIcon: 'chevron-left',
  paginationPosition: 'outside',
  rightNavIcon: 'chevron-right',
  showNavs: true,
  showPagination: false
}
