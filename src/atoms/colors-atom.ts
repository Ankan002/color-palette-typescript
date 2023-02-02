import { atom } from "recoil";

export const colorsAtom = atom<Array<string>>({
    key: "colorsAtom",
    default: []
});
