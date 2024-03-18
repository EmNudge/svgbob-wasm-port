# SVGBob WASM

All previous SVGBob WASM builds were out of date.

This is a dead simple, minimal config, SVGBob wasm build.

## Usage

```js
import { getRenderer } from '@EmNudge/svgbob-wasm';

getRenderer().then(render => {
  const svgText = render('|hello|');
  document.body.innerHTML = svgText; // do something with SVG text
});
```

## Build

Ensure you have [wasm-pack](https://github.com/rustwasm/wasm-pack) and [pnpm](https://pnpm.io/) installed.

```sh
pnpm i
npm run build
```

## Future Plans

Optimally all these packages would be retired in favor of an official build maintained by the current svgbob project owner. 

The hope was to showcase a simple-enough port to lower the burden of setting up the build process.