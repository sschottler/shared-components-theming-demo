import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export enum ThemeOptions {
  Default,
  Alternate
}

export interface Theme {
  name: ThemeOptions
  primaryColor?: string
  foregroundColor?: string
}

export const defaultTheme: Theme = {
  name: ThemeOptions.Default,
  primaryColor: 'blue',
  foregroundColor: 'white'
}

// export frequently used alternate theme values so
// consuming web apps that share a similar style don't
// have to duplicate values:
export const alternateTheme: Theme = {
  ...defaultTheme,
  name: ThemeOptions.Alternate,
  primaryColor: 'green'
}

export const SharedComponentsThemeProvider = (props: any) => {
  const mergedTheme = {
    ...defaultTheme,
    ...props.theme
  }

  return <ThemeProvider theme={mergedTheme}>{props.children}</ThemeProvider>
}

/**
 * this helper makes it so consuming app isn't REQUIRED to wrap exported
 * components in ThemeProvider if it just wants default theme:
 */
const themeValue = (prop: keyof Theme) => {
  return (props: any) => props.theme[prop] || defaultTheme[prop]
}

export const Button = styled.button`
  /* the expression below REQUIRES consuming web app to wrap in ThemeProvider to set theme: */
  /* background: ${({ theme }) => theme.primaryColor}; */
  /* this helper allows consuming web app to bypass wrapping component in ThemeProvider: */
  background: ${themeValue('primaryColor')};
  border: none;
  border-radius: ${({ theme }) => {
    // can also have conditional css applied based on name of theme
    // (alternatively, just add a theme.button.borderRadius field):
    if (theme?.name === ThemeOptions.Alternate) {
      return '10px'
    }
    return '0'
  }};
  color: ${themeValue('foregroundColor')};
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
`
