use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn render(ascii: &str) -> String {
    svgbob::to_svg_with_settings(ascii, &svgbob::Settings {
        background: "transparent".into(),
        ..svgbob::Settings::default()
    })
}