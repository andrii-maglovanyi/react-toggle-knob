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
import Toggle, {Knob} from "react-toggle-knob";

<Toggle onChange={value => console.log(value)}>
  <Knob value="not-completed">Not completed</Knob>
  <Knob value="completed">Completed</Knob>
  <Knob value="disabled" isDisabled>
    Disabled
  </Knob>
  <Knob value="all">All</Knob>
</Toggle>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
