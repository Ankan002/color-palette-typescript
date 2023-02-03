import { toast } from "react-hot-toast";

interface Props {
    color: string;
}

const ColorBox = (props: Props) => {
    const { color } = props;

    const onColorBoxPressed = () => {
        if(window !== undefined) {
            window.navigator.clipboard.writeText(color);
            toast.success("Color Copied...");
        }
    }

    return (
        <button className="flex flex-col sm:w-60 w-36 bg-white rounded-md border-2 border-primary-dark items-center justify-center py-3 px-2 m-2 hover:cursor-pointer hover:shadow-2xl" aria-label={`Copy ${color}`} onClick={onColorBoxPressed}>
            <div
                className="w-full h-40 rounded-md border-2 border-primary-dark"
                style={{
                    backgroundColor: color,
                }}
            ></div>

            <p className="font-quicksand text-xl mt-2 tracking-wider">{color}</p>
        </button>
    );
};

export default ColorBox;
