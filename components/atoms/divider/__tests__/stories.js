/**
 * Divider
 */

// Storybook
import { number } from '@storybook/addon-knobs'
import { Context, Size } from 'decorators'

// Style
import styled from 'styled-components'

// UI
import { Divider, Text } from 'components'
import Readme from '../README.md'
import { DividerDefaultProps } from '../props'

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    context: Context('', DividerDefaultProps.context),
    size: Size('', DividerDefaultProps.size),
    thickness: number('Thickness', DividerDefaultProps.thickness),
    ...props
  }

  return (
    <StyledWrapper>
      <Text>Text</Text>

      <Divider {...defaultProps} />

      <Text>Text</Text>
    </StyledWrapper>
  )
}

export const main = () => <BaseComponent />
export const vertical = () => <BaseComponent flexItem vertical />

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
`
