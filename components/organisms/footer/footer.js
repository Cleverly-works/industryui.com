/**
 * Footer
 */

// React
import React, { Fragment } from 'react'
import { arrayOf, bool, func, number, object, oneOfType, shape, string } from 'prop-types'

// UI
import { Column, Container, Heading, Icon, Link, List, ListItem, MEDIA_QUERY, Row } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Footer = ({ columns }) => {
  const renderColumns = () => {
    return columns.map((column, index) => (
      <Column key={index} offset={column.offset} {...column.size}>
        {Object.entries(column).map(([key, value], index) => {
          switch (key) {
            case 'header':
              return <Heading content={value} key={index} tag='h6' />
            case 'formatter':
              return value(index)
            case 'links':
              return renderLinks(value, index)
            case 'text':
              return renderText(value, column.icon, index)
          }
        })}
      </Column>
    ))
  }

  const renderLinks = ({ items, inline }, index) => {
    return (
      <StyledList key={index} unstyled inline={inline}>
        {items.map(({ icon, name, to }, index) => (
          <StyledListItem key={index}>
            <Link to={to} passHref>
              {icon && <StyledIcon context='primary' icon={icon} prefix='fad' />}
              {name}
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    )
  }

  const renderText = (text, icon, index) => (
    <Fragment key={index}>
      {icon && <StyledIcon context='primary' icon={icon} prefix='fad' />}
      <StyledText dangerouslySetInnerHTML={{ __html: text }} />
    </Fragment>
  )

  return (
    <StyledFooter data-cy='footer'>
      <Container>
        <Row>{renderColumns()}</Row>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  border-top: 2px solid ${({ theme }) => theme.COLOUR.primary};
  font-size: 0.875rem;
  ${({ theme: { FOOTER } }) => css`
    background: ${FOOTER.background};
    color: ${FOOTER.colour};
  `}
  padding-top: 2rem;
  text-align: center;
`

const StyledList = styled(List)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  ${MEDIA_QUERY.desktop`
    margin-top: 0;
    justify-content: flex-end;
  `}
`

const StyledListItem = styled(ListItem)`
  margin-bottom: 1.25rem;
  padding-right: 1rem;
`

const StyledIcon = styled(Icon)`
  margin: 0 0.5rem 0 0;
`

const StyledText = styled.span`
  ${MEDIA_QUERY.desktop`
    text-align: initial;
  `}
`

Footer.propTypes = {
  columns: arrayOf(
    shape({
      header: string,
      formatter: func,
      links: shape({
        align: string,
        inline: bool,
        items: arrayOf(
          shape({
            id: string,
            icon: string,
            name: string,
            to: oneOfType([object, string])
          })
        )
      }),
      offset: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      size: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      style: object
    })
  ).isRequired
}
