/**
 * Components - Molecules - Dropdown - Compnents - Item
 */

// React
import React from 'react'
import { func, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import Divider from '../../atoms/divider/divider'
import dropdownTypes from './types'
import Icon from '../../atoms/icon/icon/icon'
import Link from '../../atoms/link/link'

const renderItem = ({ id, name, to }, closeDropdown, onClick) => {
  const item = () => (
    <StyledLink className="dropdown--link" id={id} onClick={onClick}>
      {name}
    </StyledLink>
  )

  return to ? (
    <Link border={false} passHref to={to}>
      {item()}
    </Link>
  ) : (
    item()
  )
}

const DropdownItem = ({ closeDropdown, elementType, item, onClick }) => {
  switch (elementType) {
    case dropdownTypes.List:
      return (
        <StyledDropdownItem divider={item.divider}>
          {item.divider ? <Divider size="xxs" /> : renderItem(item, closeDropdown, onClick)}
        </StyledDropdownItem>
      )

    case dropdownTypes.Colour:
      return (
        <StyledColourItem
          colour={item.colour}
          onClick={() => {
            onClick(item)
          }}
        />
      )

    case dropdownTypes.Icon:
      return (
        <StyledIconItem onClick={onClick}>
          <Icon fixedWidth={false} icon={item?.icon} prefix={item?.prefix} />
        </StyledIconItem>
      )

    default:
      return 'invalid elementType'
  }
}

const StyledIconItem = styled.div`
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
  &:hover {
    border: 1px solid ${({ theme }) => theme.COLOUR.dark};
  }
`

const StyledColourItem = styled.div`
  height: 2em;
  width: 2rem;
  ${({ colour, theme }) =>
    css`
      background-color: ${colour};
      &:hover {
        border: 1px solid ${theme.COLOUR.white};
      }
    `}
  ${({ colour, theme }) => {
    const size = '0.5rem'
    return (
      colour === 'transparent' &&
      css`
        background-image: linear-gradient(45deg, #808080 25%, transparent 25%),
          linear-gradient(-45deg, #808080 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #808080 75%),
          linear-gradient(-45deg, transparent 75%, #808080 75%);
        background-size: ${size} ${size};
        background-position: 0 0, 0 ${size}, ${size} -${size}, -${size} 0px;
      `
    )
  }}
`

const StyledDropdownItem = styled.div`
  line-height: 1.5;
  white-space: nowrap;
  ${({ divider }) =>
    divider &&
    css`
      padding: 0;
    `}
`

const StyledLink = styled.span`
  color: ${({ theme }) => theme.COLOUR.primary};
  display: block;
  padding: 0.25rem 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.COLOUR.light};
    color: inherit;
  }
`

DropdownItem.propTypes = {
  closeDropdown: func,
  elementType: string,
  item: object,
  onClick: func
}

export default DropdownItem
