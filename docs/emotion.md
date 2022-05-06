# Emotion Setup

    yarn add @emotion/react @emotion/styled

<br />

    yarn add -D @emotion/babel-plugin

<br />

```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```
