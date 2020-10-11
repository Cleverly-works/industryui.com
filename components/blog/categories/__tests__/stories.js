/**
 * Blog - Categories
 */

// UI
import { BlogCategories } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Categories',
  component: BlogCategories,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <BlogCategories articles={Articles} config={Blog} />
