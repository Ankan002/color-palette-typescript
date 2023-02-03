import { colorsAtom } from "atoms";
import { generatePalette } from "helpers";
import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

const ColorLoader = () => {
    const setColorPalette = useSetRecoilState<Array<string>>(colorsAtom);
    const isMounted = useRef<boolean>(false);

    const loadColor = () => {
        const generatedColorPalette = generatePalette();

        setColorPalette(generatedColorPalette);
    };

    useEffect(() => {
        if (isMounted.current) return;

        isMounted.current = true;
        loadColor();
    }, []);

    return <></>;
};

export default ColorLoader;
