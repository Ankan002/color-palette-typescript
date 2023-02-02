import { colorsAtom } from "atoms";
import { random as getRandomColor, scale } from "chroma-js";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

const ColorLoader = () => {

    const setColorPalette = useSetRecoilState<Array<string>>(colorsAtom);
    const isMounted = useRef<boolean>(false);

    const loadColor = () => {
        const randomColorOne = getRandomColor();
        const randomColorTwo = getRandomColor();

        const genratedColorPalette = scale([randomColorOne, randomColorTwo]).mode("lch").colors(5);

        console.log(genratedColorPalette);

        setColorPalette(genratedColorPalette);
    }

    useEffect(() => {
        if(isMounted.current) return;

        isMounted.current = true;
        loadColor();
    }, []);

    return <></>;
};

export default ColorLoader;
