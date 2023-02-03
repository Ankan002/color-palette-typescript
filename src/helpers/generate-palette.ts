import chroma from "chroma-js";

export const generatePalette = () => {
    const randomColorOne = chroma.random();
    const randomColorTwo = chroma.random();

    const generatedColorPalette = chroma
        .scale([randomColorOne, randomColorTwo])
        .mode("lch")
        .colors(5)
        .map((color) => chroma(color).hex());

    return generatedColorPalette;
};
