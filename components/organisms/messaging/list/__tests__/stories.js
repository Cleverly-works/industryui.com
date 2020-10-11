/**
 * Messaging/List
 */

// UI
import { MessageList } from 'components'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/list'

export default {
  component: MessageList,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/List'
}

export const main = () => <MessageList messages={messages} />
