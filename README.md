# react-layout-components

A lightweight and easy-to-use package for building layouts with React.

## Installation

```
npm install @miyakoochi/react-layout-components
```

## Usage

The package provides two simple layout components:

### Grid

The Grid component allows you to create a grid layout with CSS Grid. You can pass in all the relevant CSS Grid styles as props, including templateColumns, templateRows, columnGap, and more.

```tsx
import { Grid } from "@miyakoochi/react-layout-components";

function App() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" columnGap="20px">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
    </Grid>
  );
}
```

### Flex

The Flex component allows you to create a flex layout with CSS Flexbox. You can pass in all the relevant CSS Flexbox styles as props, including justifyContent, alignItems, and more.

```tsx
import { Flex } from "@miyakoochi/react-layout-components";

function App() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <div>Centered content</div>
    </Flex>
  );
}
```

## License

This package is released under the MIT License.
