/**
 * Tile
 */

// React
import React from 'react'
import { bool, node, object, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Link from '../../atoms/link/link'
import TileBody from './components/body'

const Tile = ({
  body,
  className,
  colourConfig,
  context,
  description,
  loading,
  rounded,
  size,
  title,
  to
}) => {
  let selectedColour = 'success'

  if (colourConfig) {
    const ParsIntBody = parseInt(body)

    for (const key in colourConfig) {
      const ParsIntKey = parseInt(key)

      if (ParsIntBody <= ParsIntKey) {
        selectedColour = colourConfig[key]
        break
      } else if (ParsIntBody > ParsIntKey) {
        selectedColour = colourConfig[key]
      }
    }
  }

  const linked = () => {
    return (
      <StyledLink border={false} passHref to={to}>
        {tile()}
      </StyledLink>
    )
  }

  const tile = () => {
    return (
      <StyledTile
        bgColour={selectedColour}
        className={className}
        context={context}
        rounded={rounded}
        size={size}
      >
        {(title || body) && (
          <TileBody
            children={body}
            description={description}
            loading={loading}
            size={size}
            title={title}
          />
        )}
      </StyledTile>
    )
  }

  return to ? linked() : tile()
}

const StyledLink = styled(Link)`
  &:hover {
    opacity: ${({ to }) => (to ? '0.8' : '1')};
  }
`

const StyledTile = styled.div`
  background-color: ${({ theme, bgColour, context }) => {
    return context ? theme.COLOUR[context] ?? context : theme.COLOUR[bgColour] ?? bgColour
  }};
  box-shadow: 0px 8px 10px rgba(24, 37, 50, 0.1), 0px 0px 1px rgba(24, 37, 50, 0.08);
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: ${({ rounded }) => rounded && '0.25rem'};
  color: ${({ theme }) => theme.COLOUR.white};
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 1rem;
  min-height: ${({ theme, size }) => theme.TILE.MIN_HEIGHT[size]};
  min-width: 0;
  overflow: hidden;
  padding: ${({ theme, size }) => theme.TILE.PADDING[size]};
  position: relative;
  width: 100%;
  word-wrap: break-word;
`

Tile.propTypes = {
  body: node,
  className: string,
  colourConfig: object,
  context: string,
  description: string,
  loading: bool,
  rounded: bool,
  size: string,
  title: string
}

Tile.defaultProps = {
  loading: false,
  rounded: false,
  size: 'sm'
}

export default Tile
