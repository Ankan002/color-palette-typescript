import { GenerateBtn } from "components/generate-btn";
import { Palette } from "components/palette";
import { PaletteCopyBtn } from "components/palette-copy-btn";
import { colorsAtom } from "atoms";
import { KeyboardEvent } from "react";
import { toast } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { generatePalette } from "helpers/generate-palette";

function App() {
    const [colorPalette, setColorPalette] = useRecoilState<Array<string>>(colorsAtom);

    const onCPressed = () => {
        if(window !== undefined && colorPalette.length === 5) {
            window.navigator.clipboard.writeText(`${colorPalette[0]}, ${colorPalette[1]}, ${colorPalette[2]}, ${colorPalette[3]}, ${colorPalette[4]}`);
            toast.success("Palette copied to clipboard");
        }
    };

    const onSpacePressed = () => {
        const generatedPalette = generatePalette();
        setColorPalette(generatedPalette);
    }

    const keyDownEvenListener = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key);

        if(e.key === " " || e.code === "32") {
            onSpacePressed();
            return;
        }

        if(e.key === "c" || e.key === "C") {
            onCPressed();
            return;
        }
    }

    return (
        <main className="min-h-screen w-full flex flex-col justify-center items-center bg-primary-light p-5" onKeyDown={keyDownEvenListener} tabIndex={0}>
            <h1 className="sm:text-3xl text-2xl font-quicksand font-bold text-primary-dark tracking-wider text-center">
                Color Palette Generator
            </h1>

            <Palette />

            <GenerateBtn />

            <p className="font-quicksand font-bold tracking-wider text-primary-dark mt-2">
                Or Just press the space bar
            </p>
            
            <PaletteCopyBtn />
        </main>
    );
}

export default App;
