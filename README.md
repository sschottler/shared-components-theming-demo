# Demo Theming Pattern for Shared Library with Styled-Components

This repo was bootstrapped with [create-react-library](https://www.npmjs.com/package/create-react-library). It demonstrates elements of [this pattern](https://github.com/styled-components/styled-components-experimentation/blob/master/component-libraries/shared-component-libraries.md) for exporting a custom `ThemeProvider` with a shared library for styled-components.

The example sub folder has a demo web app that imports the components. Both the demo app and the library package reference `styled-components`, so we mark `styled-components` as a peerDependency and devDependency in the library so we don't include it in the package output (and hence twice in the consuming web application that also uses it):

https://styled-components.com/docs/faqs#i-am-a-library-author-should-i-bundle-styledcomponents-with-my-library

# Running the demo

## To build the component library in watch mode:

```
yarn
yarn start
```

## To run the example web app that imports the components:

In a separate terminal window:

```
cd example
yarn
yarn start
```
