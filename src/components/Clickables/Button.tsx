import * as Utils from "./utils";

export type TButton = React.HTMLAttributes<HTMLButtonElement> & {
    stylization: Utils.TStylization,
};

export default function Button({stylization, ...props}: TButton) {
    return <button {...props} className={Utils.handleStylization(stylization, props.className)}>
        {props.children}
    </button>
}
