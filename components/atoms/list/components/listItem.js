/**
 * List Item
 */

// React
import { bool, node, string } from 'prop-types'

// UI
import { Icon } from '../../'

// Style
import styled from 'styled-components'

export const ListItem = ({ children, className, group, icon, style }) =>
  <StyledItem className={className} group={group} style={style}>
    {icon && <StyledIcon aria-hidden='true' icon={icon} size='2x' />}
    {children}
  </StyledItem>

const groupStyles = `
  border: 1px solid rgba(0, 0, 0, .125);
  margin-bottom: -1px;
  padding: .75rem 1.25rem;
`

const StyledItem = styled.li`
  position: relative;
  ${({ group }) => group && groupStyles}
`

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.COLOUR.secondary};
  float: left;
  margin: .1rem 1rem 0 0;
`

ListItem.propTypes = {
  children: node.isRequired,
  group: bool,
  icon: string
}