/**
 * Messaging/Send
 */

// UI
import { MessagingSend } from 'components'
import Readme from '../README.md'

export default {
  args: {
    audienceItems: [
      { name: 'All', id: 'all' },
      { name: 'Internal', id: 'internal' },
      { name: 'Customer Only', id: 'customer' },
      { name: 'Supplier Only', id: 'supplier' },
      { name: 'Customer & Supplier', id: 'customer-supplier' }
    ],
    maxLength: 320,
    onSubmit: () => {}
  },
  argTypes: {
    maxLength: {
      control: {
        type: 'number'
      }
    }
  },
  component: MessagingSend,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/Send'
}

export const main = args => {
  return <MessagingSend {...args} />
}
