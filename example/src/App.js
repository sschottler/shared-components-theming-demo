import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import {
  Button,
  SharedComponentsThemeProvider,
  defaultTheme,
  alternateTheme,
  ThemeOptions
} from 'shared-components'

const Header = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.headerColor};
`

const appTheme = {
  primaryColor: 'green',
  headerColor: 'red'
}

const App = () => {
  const [componentsTheme, setComponentsTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    if (componentsTheme.name === ThemeOptions.Default) {
      setComponentsTheme(alternateTheme)
    } else {
      setComponentsTheme(defaultTheme)
    }
  }
  return (
    <ThemeProvider theme={appTheme}>
      <SharedComponentsThemeProvider theme={componentsTheme}>
        <main>
          <Header>Demo App</Header>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </main>
      </SharedComponentsThemeProvider>
    </ThemeProvider>
  )
}

export default App
