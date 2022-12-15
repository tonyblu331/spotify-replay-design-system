# sr-anchor



<!-- Auto Generated Below -->


## Overview

Anchor component to redirect to another URL.

## Properties

| Property       | Attribute         | Description                                                                                                                           | Type      | Default     |
| -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `external`     | `external`        | Indicates whether the component points to an external URL. You define external, and it will be styled differently. Defaults to false. | `boolean` | `false`     |
| `href`         | `href`            | The URL to redirect to.                                                                                                               | `string`  | `undefined` |
| `openInNewTab` | `open-in-new-tab` | Whether or not to open the URL in a new tab. Defaults to false.                                                                       | `boolean` | `false`     |


## Dependencies

### Depends on

- [sr-text](../../primitives/sr-text)

### Graph
```mermaid
graph TD;
  sr-anchor --> sr-text
  style sr-anchor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*