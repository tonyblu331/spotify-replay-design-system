# sr-label



<!-- Auto Generated Below -->


## Overview

The `<sr-label>` component is a caption that helps provide context regarding field inputs.

## Properties

| Property  | Attribute | Description         | Type                                | Default     |
| --------- | --------- | ------------------- | ----------------------------------- | ----------- |
| `variant` | `variant` | Label variant state | `"default" \| "error" \| "success"` | `'default'` |


## Dependencies

### Used by

 - [sr-combobox](../sr-combobox)
 - [sr-text-area](../sr-text-area)
 - [sr-text-input](../sr-textinput)

### Depends on

- [sr-text](../../primitives/sr-text)

### Graph
```mermaid
graph TD;
  sr-label --> sr-text
  sr-combobox --> sr-label
  sr-text-area --> sr-label
  sr-text-input --> sr-label
  style sr-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
