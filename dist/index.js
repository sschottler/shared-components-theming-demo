function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  /* the expression below REQUIRES consuming web app to wrap in ThemeProvider to set theme: */\n  /* background: ", "; */\n  /* this helper allows consuming web app to bypass wrapping component in ThemeProvider: */\n  background: ", ";\n  border: none;\n  border-radius: ", ";\n  color: ", ";\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: bold;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

(function (ThemeOptions) {
  ThemeOptions[ThemeOptions["Default"] = 0] = "Default";
  ThemeOptions[ThemeOptions["Alternate"] = 1] = "Alternate";
})(exports.ThemeOptions || (exports.ThemeOptions = {}));

var defaultTheme = {
  name: exports.ThemeOptions.Default,
  primaryColor: 'blue',
  foregroundColor: 'white'
};
var alternateTheme = _extends(_extends({}, defaultTheme), {}, {
  name: exports.ThemeOptions.Alternate,
  primaryColor: 'green'
});
var SharedComponentsThemeProvider = function SharedComponentsThemeProvider(props) {
  var mergedTheme = _extends(_extends({}, defaultTheme), props.theme);

  return React.createElement(styled.ThemeProvider, {
    theme: mergedTheme
  }, props.children);
};

var themeValue = function themeValue(prop) {
  return function (props) {
    return props.theme[prop] || defaultTheme[prop];
  };
};

var Button = styled__default.button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.primaryColor;
}, themeValue('primaryColor'), function (_ref2) {
  var theme = _ref2.theme;

  if ((theme === null || theme === void 0 ? void 0 : theme.name) === exports.ThemeOptions.Alternate) {
    return '10px';
  }

  return '0';
}, themeValue('foregroundColor'));

exports.Button = Button;
exports.SharedComponentsThemeProvider = SharedComponentsThemeProvider;
exports.alternateTheme = alternateTheme;
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=index.js.map
