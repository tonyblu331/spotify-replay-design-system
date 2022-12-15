# sr-combobox



<!-- Auto Generated Below -->


## Overview

Combobox allows selection of a single value from the options specified in the transcluded slot.
This component expects that the HTML elements passed in the slot are of type <option>
If you want an empty option to be selectable, add an empty `<option>`. The last option will be the initial selection.

## Properties

| Property | Attribute | Description                                            | Type     | Default     |
| -------- | --------- | ------------------------------------------------------ | -------- | ----------- |
| `label`  | `label`   | Text string to add to a label to describe the combobox | `string` | `undefined` |


## Events

| Event      | Description                                                     | Type               |
| ---------- | --------------------------------------------------------------- | ------------------ |
| `selected` | Emitted when the one of the options in the combobox is selected | `CustomEvent<any>` |


## Dependencies

### Depends on

- [sr-stack](../../layouts/sr-stack)
- [sr-label](../sr-label)

### Graph
```mermaid
graph TD;
  sr-combobox --> sr-stack
  sr-combobox --> sr-label
  sr-label --> sr-text
  style sr-combobox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
