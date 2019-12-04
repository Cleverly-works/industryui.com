/**
 * Button - Toolbar
 * Combine sets of button groups into button toolbars for more complex components. Use utility
 * classes as needed to space out groups, buttons, and more.
 */

// React
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const ButtonToolbar = ({ align, children }) => {
  return (
    <StyledToolbar align={align} aria-label='Toolbar with button groups' role='toolbar'>
      <StyledGroup role='group' aria-label='First group'>
        {children}
      </StyledGroup>
    </StyledToolbar>
  )
}

const StyledToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
`

const StyledGroup = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;

  a:hover {
    color: white;
  }

  & > a:not(:last-child),
  button:not(:last-child) {
    border-bottom-right-radius: 0;
    border-right: 1px solid ${({ theme: { COLOUR } }) => COLOUR.light};
    border-top-right-radius: 0;
  }

  & > a:not(:first-child),
  button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

ButtonToolbar.propTypes = {
  align: string,
  children: node.isRequired
}

ButtonToolbar.defaultProps = {
  align: 'center'
}