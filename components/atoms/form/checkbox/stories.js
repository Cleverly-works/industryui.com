/**
 * Checkbox
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI
import { Checkbox } from './'
import Readme from './README.md'

const CHECKBOXS = [
  {
    id: 'insurance',
    // isChecked: ownedToggle === true,
    label: 'I pledge to get insurance for my new dog',
    required: true,
    value: 'Insurance'
  }
]

storiesOf('Atoms/Form/Checkbox', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

// Default
  .add('Default', () =>
    <Checkbox
      data={CHECKBOXS}
      legend='Finally, which of the following do you pledge to do for your new dog?'
      change={action('button-click')}
    />
  )

// onClick={action('button-click')}
// checked={boolean('Checked', null)}
// disabled={boolean('Disabled', false)}
// indeterminate={boolean('Indeterminate', false)}
// label={text('Label', 'Checkbox')}
// name={text('Name', 'checkbox')}
// readOnly={boolean('Readonly', false)}
// slider={boolean('Slider', false)}
// toggle={boolean('Toggle', false)}