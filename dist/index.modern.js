import { createElement } from 'react';
import styled, { ThemeProvider } from 'styled-components';

let _ = t => t,
    _t;
var ThemeOptions;

(function (ThemeOptions) {
  ThemeOptions[ThemeOptions["Default"] = 0] = "Default";
  ThemeOptions[ThemeOptions["Alternate"] = 1] = "Alternate";
})(ThemeOptions || (ThemeOptions = {}));

const defaultTheme = {
  name: ThemeOptions.Default,
  primaryColor: 'blue',
  foregroundColor: 'white'
};
const alternateTheme = { ...defaultTheme,
  name: ThemeOptions.Alternate,
  primaryColor: 'green'
};
const SharedComponentsThemeProvider = props => {
  const mergedTheme = { ...defaultTheme,
    ...props.theme
  };
  return createElement(ThemeProvider, {
    theme: mergedTheme
  }, props.children);
};

const themeValue = prop => {
  return props => props.theme[prop] || defaultTheme[prop];
};

const Button = styled.button(_t || (_t = _`
  /* the expression below REQUIRES consuming web app to wrap in ThemeProvider to set theme: */
  /* background: ${0}; */
  /* this helper allows consuming web app to bypass wrapping component in ThemeProvider: */
  background: ${0};
  border: none;
  border-radius: ${0};
  color: ${0};
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
`), ({
  theme
}) => theme.primaryColor, themeValue('primaryColor'), ({
  theme
}) => {
  if ((theme === null || theme === void 0 ? void 0 : theme.name) === ThemeOptions.Alternate) {
    return '10px';
  }

  return '0';
}, themeValue('foregroundColor'));

export { Button, SharedComponentsThemeProvider, ThemeOptions, alternateTheme, defaultTheme };
//# sourceMappingURL=index.modern.js.map
