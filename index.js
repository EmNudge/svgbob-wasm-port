import {
  __wbg_set_wasm,
  render,
  __wbindgen_object_drop_ref,
  __wbindgen_throw,
} from "./rust/pkg/svgbob_wasm_bg.js";
import instantiate from "./rust/pkg/svgbob_wasm_bg.wasm";

let hasLoaded = false;

export const getRenderer = async () => {
  if (hasLoaded) return render;

  const wasm = await instantiate({
    "./svgbob_wasm_bg.js": {
      __wbindgen_object_drop_ref,
      __wbindgen_throw,
    },
  });
  __wbg_set_wasm(wasm.instance.exports);
  
  return render;
};