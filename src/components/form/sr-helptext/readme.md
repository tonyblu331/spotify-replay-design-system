# sr-helptext



<!-- Auto Generated Below -->


## Overview

The `<sr-help-text>` component is a guideline that helps provide context regarding field inputs.

## Properties

| Property  | Attribute | Description       | Type                                | Default     |
| --------- | --------- | ----------------- | ----------------------------------- | ----------- |
| `variant` | `variant` | Helper Text State | `"default" \| "error" \| "success"` | `'default'` |


## Dependencies

### Used by

 - [sr-text-area](../sr-text-area)
 - [sr-text-input](../sr-textinput)

### Depends on

- [sr-text](../../primitives/sr-text)

### Graph
```mermaid
graph TD;
  sr-help-text --> sr-text
  sr-text-area --> sr-help-text
  sr-text-input --> sr-help-text
  style sr-help-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
