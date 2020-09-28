/**
 * Form - Label
 */

// UI
import { FormLabel } from 'components'
import Readme from '../README.md'

export default {
  component: FormLabel,
  title: 'Form/Label',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    children: '',
    id: '',
    label: 'Label',
    ...props
  }

  return <FormLabel {...defaultProps} />
}

export const main = () => <BaseComponent />
