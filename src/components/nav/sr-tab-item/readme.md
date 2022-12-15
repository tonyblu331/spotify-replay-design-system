# sr-tab



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description         | Type      | Default     |
| -------------- | -------------- | ------------------- | --------- | ----------- |
| `href`         | `href`         | Specify Tab content | `string`  | `undefined` |
| `inActive`     | `inactive`     | Inactive Tab        | `boolean` | `false`     |
| `name`         | `name`         | Specify Tab header  | `string`  | `undefined` |
| `selectedItem` | `selecteditem` | Selected Tab header | `string`  | `undefined` |


## Dependencies

### Depends on

- [sr-anchor](../sr-anchor)

### Graph
```mermaid
graph TD;
  sr-tab-item --> sr-anchor
  sr-anchor --> sr-box
  sr-anchor --> sr-stack
  sr-anchor --> sr-text
  style sr-tab-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
