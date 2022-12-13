# sr-combobox



<!-- Auto Generated Below -->


## Overview

Combobox allows selection of a single value from the options specified in the transcluded slot.
This component expects that the HTML elements passed in the slot are of type <option>

## Properties

| Property     | Attribute     | Description                                                      | Type      | Default     |
| ------------ | ------------- | ---------------------------------------------------------------- | --------- | ----------- |
| `allowEmpty` | `allow-empty` | If true, the checkbox will allow the selection of an empty value | `boolean` | `true`      |
| `labelText`  | `label-text`  | Text string to add to a label to describe the combobox           | `string`  | `undefined` |


## Events

| Event      | Description                                                     | Type               |
| ---------- | --------------------------------------------------------------- | ------------------ |
| `selected` | Emitted when the one of the options in the combobox is selected | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
