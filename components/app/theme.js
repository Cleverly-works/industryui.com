/**
 * App - Theme
 */

// React
import React, { useState } from 'react'
import { node, object } from 'prop-types'

// Lodash
import merge from 'lodash/merge'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import Theme from '../theme/theme'

const AppTheme = ({ children, theme: initial }) => {
  const [theme, setTheme] = useState(initial)

  return <ThemeProvider theme={{ setTheme, ...merge(Theme, theme) }}>{children}</ThemeProvider>
}

AppTheme.propTypes = {
  children: node.isRequired,
  theme: object
}

AppTheme.defaultProps = {
  theme: {}
}

export default AppTheme
