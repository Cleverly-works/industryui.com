/**
 * Article
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Article } from '../../'
import Readme from './README.md'

storiesOf('Templates/Article', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Article content={{}} />
    )
  )