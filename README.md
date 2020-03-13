<h1 align="center">
    🎛 React Toggle Knob
</h1>

[![Travis build](https://img.shields.io/travis/andrii-maglovanyi/react-toggle-knob?style=flat-square)](https://travis-ci.org/andrii-maglovanyi/react-toggle-knob)
![MIT License](https://img.shields.io/github/license/andrii-maglovanyi/react-toggle-knob?style=flat-square)

A lightweight toggle with floating options number.

![React Toggle Knob](https://media.giphy.com/media/ekY9luI79jrRPB2pzu/giphy.gif)

## Install

```bash
npm install react-toggle-knob
```

## Getting Started

```jsx
import Toggle, {Option} from "react-toggle-knob";

<Toggle onChange={value => console.log(value)}>
  <Option value="not-completed">Not completed</Option>
  <Option value="completed">Completed</Option>
  <Option value="disabled" isDisabled>
    Disabled
  </Option>
  <Option value="all">All</Option>
</Toggle>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
