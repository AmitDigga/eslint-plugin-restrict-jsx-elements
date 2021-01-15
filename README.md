# eslint-plugin-restrict-jsx-elements

## Installation

`yarn add eslint-plugin-restrict-jsx-elements -D`

## Get Started

To add this plugin and restricted elements, you have to modify `.eslintrc`

```js
{
  ...,
  "plugins": [
    ...,
    "restrict-jsx-elements"
  ],
  "rules": {
    "restrict-jsx-elements/elements": [
      "warn",
      {
        "restrict": {
          "Element1": true,
          "Element2": {
            "message": "Please dont use element2, use Element3 instead"
          }
        }
      }
    ]
  }
}
```
