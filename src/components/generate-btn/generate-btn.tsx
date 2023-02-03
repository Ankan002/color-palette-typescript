import { colorsAtom } from "atoms";
import { generatePalette } from "helpers/generate-palette";
import { useSetRecoilState } from "recoil";

const GenerateBtn = () => {
    const setColorPalette = useSetRecoilState<Array<string>>(colorsAtom);

    const onGenerateBtnPress = () => {
        const generatedPalette = generatePalette();
        setColorPalette(generatedPalette);
    }

    return (
        <button className="py-2 px-3 bg-primary-dark-yellow hover:bg-primary-light-yellow text-primary-dark border-2 border-primary-dark rounded-md flex justify-center items-center font-quicksand mt-5 text-xl font-bold tracking-wider hover:shadow-[0_1px_12px_2px_rgba(246,186,61,0.7)]" onClick={onGenerateBtnPress} aria-label="Generate New Palette">
            Generate New Color
        </button>
    )
}

export default GenerateBtn;