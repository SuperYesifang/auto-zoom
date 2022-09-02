# auto-zoom

![auto-zoom](https://img.shields.io/badge/auto--zoom-v1.0.1-%23C50008?logo=npm)
[![blog](https://img.shields.io/badge/blog-yesifang.com-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAAIAQUiBhQVBA05CyK0I2z4MJTgKoV8GEoKAgZyFkT8MZfTKX4dBRFWEDP9MZfMJ3kGAQQHAQTlK4htFUEAHRMATDAAbUQAf1EAh1QAgFAAbUUATDAAHhNMDy7KJngAeUsAKBp9GEr4MJMDAQIAmWEAWzkABAOGGlD9MZYAcUgABQNoFD7mLIoAZUCdHl4ANiKiH2EpCBgAh1UAAgERAwrVKH9nFD0ALBwSAwuqIWXmK4pTEDIAWTgrCBp2F0eVHVmKG1NWETMAdEgAgVAAAQIAJTcATXIAZJQAbqUAap0AVoEAfE4AAQEAN1EAgMAAaEIACQ4Aap4ARiwACQ0AebMAmV8AEwwAAAAAZ5oAZT8AMkkAkFoAEQsAebMAl14AGCQAkl0ALx4AOlYAeEsAGRAATHAAbkUAll0All4AbkYAMB4ATXMABwQAIxYANiIAPicANyIAJBYAQF4AIjIAis0AAgMAhsYAZJYARWYAk9oAHy4ABQcAfbkAO1gAis3/MZgAmmEAld3///8EabibAAAAgHRSTlMACCIVObX54XwKcv3UHVb+zQYH5m0xfrTU4NW1fzJMy8hDffkD/pcHh/69CGjnqJ5ZoynfBBHWZ0kSqudTlCt2lotWwNUCQIOrvrWVzwFe3a4QtnQPz/0gAbKnVe4c0Psp9E9jximBtvj4t0+FCzpaZlo7bTruA+Wtdfs1CNdm7ZpKyEIAAAABYktHRIP8tM/SAAAAB3RJTUUH5QoVBh0NInrzjgAAATtJREFUOMt902VbwzAUBeDLcAYMhru7uzPcXYcP1+EyPMkvZ03TNk0TztfzNnL7BECeCFck/JOo6BiEYuPiVX2CG9EkJsn7ZA9iSUmV9d40ZCYdICMzKzsnNy+/wASFVo+KALCR4hIGSjlQVm4BXFFZRUE1B2q8HMC4tk4D9RxoABvAjRpwuS3QJADcrIkW6witImhrD4OOTtZ7ukAEuFtboqeXjqqvH5xgQL/qoG9oeET/FQIYdQxWAGNmMT4xOTU9MyuCOVbPLywSGhEs6f3yCiFysEr7tXWiABubWu/fIiqwTRfYISqwu0fBvgoc0DlCgCjA4ZF+hWMFODllMzizgfML2l5eXfuNGd7YAARv7+4fHoPc9J/swJlnrn+Rgdc3C4SkT+vd7D8+peDr2+h/FK838Ev3D4W//wNiKCWwWalJAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yMVQwNjoyOToxMyswMDowMP1Zb/cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjFUMDY6Mjk6MTMrMDA6MDCMBNdLAAAAAElFTkSuQmCC)](//yesifang.com)

> 这是一个屏幕自适应缩放工具。常用于大屏项目。
>
> This is a screen adaptive zoom tool.Commonly used in large screen projects.

[中文文档](./docs/zh_CN.md)

<div align="center">
  <a href="https://nodei.co/npm/auto-zoom/"><img src="https://nodei.co/npm/auto-zoom.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

## Run Simple Demo

```shell
$ git clone https://github.com/SuperYesifang/auto-zoom.git
$ cd auto-zoom
$ npm run serve
```

## Usage

`new AutoZoom(options):AutoZoom`

### 1. Use CDN

```html
<script src="https://raw.githubusercontent.com/SuperYesifang/auto-zoom/master/dist/autoZoom.cdn.js"></script>
<script>
autoZoom({
  target: "#root",
  designSize: [1920, 1080]
});
</script>
```



### 2. Use ESM

```js
import autoZoom from "auto-zoom";

autoZoom({
  target: "#root",
	designSize: [1920, 1080]
});
```



## Options

| prop         | type      | description                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| `target`   | string | HTMLElement | auto scale zoom target Element. |
| `reference` | string | HTMLElement | auto scale reference Element. default: `false`, will observe window size. |
| `designSize`  | number[] | expected design size. default `[1920, 1080]`. |
| `transform` | object | Function | CSS transform config. support `origin`、`translate` option. default: `{ origin: "0 0", translate: "translate(0,0)" }`. |
| `pause` | boolean | scale zoom observer initial pause status. default `false`. |

## API

### new AutoZoom()
`new AutoZoom(options):AutoZoom`
Instantiation a auto sclae zoom observer.

```js
import AutoZoom from "auto-zoom";

let observer = new AutoZoom({
  target: "#root"
});
```

### observer.start()
`observer.start()`
Start observer auto scale zoom when observer pauseed.

### observer.stop()
`observer.stop()`
Stop observer auto scale zoom.

### observer.rezoom()
`observer.rezoom()`
Trigger once auto scale zoom.

### observer.unobserve()
`observer.unobserve()`
Remove auto scale zoom observer from reference.

### observer.on()
`observer.on(type:Event, listener:Listener):removeListener`
Add a event listener to observer.


### observer.off()
`observer.off(type:Event, listener:Listener)`
Remove event listener from observer.

## @types

```ts
type referenceWidth = number; // referene element width
type referenceHeight = number; // reference element height
type designWidth = number; // design width
type designHeight = number; // design height

type AutoZoomOptions {
  target:string | HTMLElement; // auto scale zoom target Element.
  reference:string | HTMLElement; // auto scale zoom reference Element
  designSize: [number, number]; // target's expected design size.
  transform: { // CSS transform origin and translate option.
    origin: string,
    translate: string | (zoom:number, [referenceWidth, referenceHeight], [designWidth, designHeight]) => string; // Support the use of custom functions to control scaling
  };
  pause:boolean; // observer initial or current pause status.
}

type Event = "zoom" | "start" | "stop" | "unobserve";

type Listener = (observer:AutoZoom) => {};

type removeListener = Function;

class AutoZoom {
  constructor(options:AutoZoomOptions) {}
  [K in keyof AutoZoomOptions]: AutoZoomOptions[K];
  zoom: number; // current scale zoom.
  rezoom: Function; // trigger once auto scale zoom.
  unobserve: Function; // remove auto scale zoom observer from reference.
  stop: Function; // stop auto scale zoom.
  start: Function; // start auto scale zoom when observer paused.
  on: (type:Event, listener:Listener) => removeListener // add event listener to observer.
  off: (type:Event, listener:Listener) => {} // remove event listener from observer.
}
```