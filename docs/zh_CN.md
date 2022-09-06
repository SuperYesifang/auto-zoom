# auto-zoom

![auto-zoom](https://img.shields.io/badge/auto--zoom-v2.0.3-%23C50008?logo=npm)
[![blog](https://img.shields.io/badge/blog-yesifang.com-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAAIAQUiBhQVBA05CyK0I2z4MJTgKoV8GEoKAgZyFkT8MZfTKX4dBRFWEDP9MZfMJ3kGAQQHAQTlK4htFUEAHRMATDAAbUQAf1EAh1QAgFAAbUUATDAAHhNMDy7KJngAeUsAKBp9GEr4MJMDAQIAmWEAWzkABAOGGlD9MZYAcUgABQNoFD7mLIoAZUCdHl4ANiKiH2EpCBgAh1UAAgERAwrVKH9nFD0ALBwSAwuqIWXmK4pTEDIAWTgrCBp2F0eVHVmKG1NWETMAdEgAgVAAAQIAJTcATXIAZJQAbqUAap0AVoEAfE4AAQEAN1EAgMAAaEIACQ4Aap4ARiwACQ0AebMAmV8AEwwAAAAAZ5oAZT8AMkkAkFoAEQsAebMAl14AGCQAkl0ALx4AOlYAeEsAGRAATHAAbkUAll0All4AbkYAMB4ATXMABwQAIxYANiIAPicANyIAJBYAQF4AIjIAis0AAgMAhsYAZJYARWYAk9oAHy4ABQcAfbkAO1gAis3/MZgAmmEAld3///8EabibAAAAgHRSTlMACCIVObX54XwKcv3UHVb+zQYH5m0xfrTU4NW1fzJMy8hDffkD/pcHh/69CGjnqJ5ZoynfBBHWZ0kSqudTlCt2lotWwNUCQIOrvrWVzwFe3a4QtnQPz/0gAbKnVe4c0Psp9E9jximBtvj4t0+FCzpaZlo7bTruA+Wtdfs1CNdm7ZpKyEIAAAABYktHRIP8tM/SAAAAB3RJTUUH5QoVBh0NInrzjgAAATtJREFUOMt902VbwzAUBeDLcAYMhru7uzPcXYcP1+EyPMkvZ03TNk0TztfzNnL7BECeCFck/JOo6BiEYuPiVX2CG9EkJsn7ZA9iSUmV9d40ZCYdICMzKzsnNy+/wASFVo+KALCR4hIGSjlQVm4BXFFZRUE1B2q8HMC4tk4D9RxoABvAjRpwuS3QJADcrIkW6witImhrD4OOTtZ7ukAEuFtboqeXjqqvH5xgQL/qoG9oeET/FQIYdQxWAGNmMT4xOTU9MyuCOVbPLywSGhEs6f3yCiFysEr7tXWiABubWu/fIiqwTRfYISqwu0fBvgoc0DlCgCjA4ZF+hWMFODllMzizgfML2l5eXfuNGd7YAARv7+4fHoPc9J/swJlnrn+Rgdc3C4SkT+vd7D8+peDr2+h/FK838Ev3D4W//wNiKCWwWalJAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yMVQwNjoyOToxMyswMDowMP1Zb/cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjFUMDY6Mjk6MTMrMDA6MDCMBNdLAAAAAElFTkSuQmCC)](//yesifang.com)

> 这是一个屏幕自适应缩放工具。常用于大屏项目。
>
> This is a screen adaptive zoom tool.Commonly used in large screen projects.

[Englisth Document](../README.md)

<div align="center">
  <a href="https://nodei.co/npm/auto-zoom/"><img src="https://nodei.co/npm/auto-zoom.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

## 运行简单示例

```shell
$ git clone https://github.com/SuperYesifang/auto-zoom.git
$ cd auto-zoom
$ npm run serve
```

## 使用

`new AutoZoom(options):AutoZoom`

### 1. 以CDN方式使用

```html
<script src="https://raw.githubusercontent.com/SuperYesifang/auto-zoom/master/dist/AutoZoom.cdn.js"></script>
<script>
new AutoZoom({
  target: "#root",
  designSize: [1920, 1080]
});
</script>
```



### 2. 以ESM的方式使用

```js
import autoZoom from "auto-zoom";

new AutoZoom({
  target: "#root",
	designSize: [1920, 1080]
});
```



## 选项

| prop         | type      | description                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| `target`   | string \| HTMLElement | 要自动缩放的目标元素。 |
| `reference` | string \| HTMLElement | 自动缩放的参照元素. 默认为：参照浏览器窗口. |
| `designSize`  | number[] | 期望的设计稿尺寸。默认为：`[1920, 1080]`。|
| `transform` | string \| Function | 除scale外需要添加到目标元素上的其他transform属性(如：'translate'、'rotate'等，支持自定义函数控制自动缩放的transform)，默认为：`"translate(0,0)"`。|
| `style` | object | 需要注册到目标元素上的额外CSS样式。默认为：`{ transformOrigin: "0 0" }` |
| `pause` | boolean | 缩放观察器初始时的暂停状态，默认为：`false`。 |

## API

### new AutoZoom()
`new AutoZoom(options):AutoZoom`

实例化一个自动缩放观察器。

```js
import AutoZoom from "auto-zoom";

let observer = new AutoZoom({
  target: "#root"
});
```

### observer.start()
`observer.start()`

启动自动缩放，当观察器暂停时。

### observer.stop()
`observer.stop()`

停止(暂停)自动缩放。

### observer.rezoom()
`observer.rezoom()`
触发一次自动缩放。

### observer.unobserve()
`observer.unobserve()`

从参照元素上移除自动缩放观察器。

### observer.on()
`observer.on(type:Event, listener:Listener):removeListener`

向观察器添加一个事件监听器。


### observer.off()
`observer.off(type:Event, listener:Listener)`

从观察器上移除一个事件监听器。

## @types

```ts
type referenceWidth = number; // 参照元素的宽度
type referenceHeight = number; // 参照元素的高度
type designWidth = number; // 期望设计稿宽度
type designHeight = number; // 期望设计稿高度

type AutoZoomOptions {
  target:string | HTMLElement; // 要自动缩放的目标元素。
  reference: string | HTMLElement; // 自动缩放的参照元素。
  designSize: [number, number]; // 目标的期望设计稿尺寸。
  transform:  string | (zoom:number, [referenceWidth, referenceHeight], [designWidth, designHeight]) => string; // 除scale外需要添加到目标元素上的其他transform属性(如：translate、rotate等，支持自定义函数控制自动缩放的transform)。
  style: { [key:string]: string }, // 其他需要注册到DOM上的CSS样式
  pause:boolean; // 观察器的初始 或 当前暂停状态。
}

type Event = "zoom" | "start" | "stop" | "unobserve";

type Listener = (observer:AutoZoom) => {};

type removeListener = Function;

class AutoZoom {
  constructor(options:AutoZoomOptions) {}
  [K in keyof AutoZoomOptions]: AutoZoomOptions[K];
  zoom: number; // 当前缩放等级。
  rezoom: Function; // 触发一次自动缩放。
  unobserve: Function; // 从参照元素上移除自动缩放观察器。
  stop: Function; // 停止(暂停)自动缩放观察器。
  start: Function; // 启动自动缩放，当观察器暂停时。
  on: (type:Event, listener:Listener) => removeListener // 添加一个事件监听器到观察器。
  off: (type:Event, listener:Listener) => {} // 从观察器上移除指定事件监听器。
}
```