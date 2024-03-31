import {
  __wbg_set_wasm,
  render,
  __wbindgen_object_drop_ref,
  __wbindgen_throw,
} from "./rust/pkg/svgbob_wasm_bg.js";
import instantiate from "./rust/pkg/svgbob_wasm_bg.wasm";

const wasm = instantiate({
  "./svgbob_wasm_bg.js": {
    __wbindgen_object_drop_ref,
    __wbindgen_throw,
  },
});
wasm.then(({ instance }) => __wbg_set_wasm(instance.exports));

/** @returns {Promise<(ascii: string) => string>} */
export const getRenderer = () => wasm.then(() => render);