import { colorsAtom } from "atoms";
import { ColorBox } from "components/elements";
import { useRecoilValue } from "recoil";

const Palette = () => {
    const currentColorPalette = useRecoilValue<Array<string>>(colorsAtom);

    return (
        <div className="w-full flex flex-wrap items-center justify-center mt-8">
            {
                currentColorPalette.map((color, index) => (
                    <ColorBox color={color} key={index} />
                ))
            }
        </div>
    )
};

export default Palette;
