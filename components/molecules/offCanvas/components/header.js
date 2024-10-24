/**
 * Molecules - OffCanvas - Header
 */

// React
import React from 'react'
import { bool, func, oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// Polished
import { lighten } from 'polished'

// UI
import Avatar from '../../../atoms/avatar/avatar'
import Button from '../../../atoms/button/button/button'
import Close from '../../../atoms/close/close'
import Column from '../../../atoms/grid/Column'
import Divider from '../../../atoms/divider/divider'
import Heading from '../../../atoms/heading/heading'
import Icon from '../../../atoms/icon/icon/icon'
import Row from '../../../atoms/grid/Row'
import Text from '../../../atoms/text/text'
import THEME_CONTEXT from '../../../constants/context'

const OffCanvasHeader = ({
  context,
  hasAvatar,
  headerContent,
  onClose,
  submit,
  title,
  variant
}) => {
  return (
    <StyledHeader context={context} data-cy="offCanvasHeader" variant={variant}>
      <Row align="center">
        <Column sm={8}>
          <Icon context={variant === 'extended' ? 'white' : context} icon="expand" />
          <StyledHeading content={title} context={context} tag="h4" variant={variant} />
        </Column>

        <Column sm={4}>
          <StyledContainer>
            {submit && (
              <>
                <Button
                  content="Submit"
                  context="primary"
                  form="offCanvasForm"
                  size="sm"
                  type="submit"
                />

                <Divider flexItem size="sm" vertical />
              </>
            )}
            <Close click={onClose} context={variant === 'normal' ? context : 'white'} />
          </StyledContainer>
        </Column>
      </Row>

      <StyledBodyContainer>
        {hasAvatar && (
          <StyledAvatarContainer context={context}>
            <Avatar content="Avatar" context={context} size="lg" />
          </StyledAvatarContainer>
        )}

        {headerContent && (
          <StyledText content={headerContent} context={context} size="xs" variant={variant} />
        )}
      </StyledBodyContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: ${({ context, theme, variant }) =>
    variant === 'normal' ? '#fff' : lighten(0.1, theme.COLOUR[context])};
  border-top: 0.5rem solid
    ${({ context, variant, theme }) =>
      variant === 'normal' && context !== 'primary' ? theme.COLOUR[context] : 'transparent'};
  ${({ shadow }) => shadow && 'box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.11);'}
  color: ${({ theme: { COLOUR } }) => COLOUR.black};
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem 1rem 1rem;
  position: fixed;
  width: inherit;
  z-index: 1;
`

const StyledHeading = styled(Heading)`
  color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR.black : COLOUR.white};
  display: inline;
  margin: 0;
  padding-left: 0.25rem;
`

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const StyledBodyContainer = styled.div`
  display: flex;
`

const StyledAvatarContainer = styled.div`
  align-items: center;
  background-color: ${({ context, theme }) => lighten(0.2, theme.COLOUR[context])};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-right: 24.5px;
  min-height: 70px;
  min-width: 70px;
`

const StyledText = styled(Text)`
  color: ${({ context, theme, variant }) =>
    variant === 'normal' ? theme.COLOUR.black : theme.COLOUR.white};
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  hasAvatar: bool,
  headerContent: string,
  onClose: func.isRequired,
  submit: bool,
  title: string.isRequired,
  variant: oneOf(['extended', 'normal'])
}

OffCanvasHeader.defaultProps = {
  hasAvatar: false,
  submit: true,
  variant: 'extended'
}
export default OffCanvasHeader
