import {defaultClassname} from "./defaultClassname";

export type TStylization = {
    type: "base" | "outlined" | "blended",
    twColor: "green" | "gray",
}

export const handleStylization = (stylization: TStylization, optClassname ?: string) => {
    let className : string = " ";
    switch (stylization.type) {
        case "base":
            if(stylization.twColor === "gray") className += "font-bold bg-grey-800 text-grey-100";
            else className;
            break;
        case "outlined":
            if(stylization.twColor === "gray") className += "bg-grey-900 text-grey-100";
            else className;
            break;
        case "blended":
            if(stylization.twColor === "green") className += "font-semibold bg-s-green/40 text-s-green"
            else className;
            break;
    }

    return defaultClassname + className + ` ${optClassname}`;
}
