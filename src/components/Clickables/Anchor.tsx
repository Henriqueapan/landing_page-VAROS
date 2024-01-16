import * as Utils from "./utils";

type TAnchor = React.HTMLProps<HTMLAnchorElement> & {
    stylization: Utils.TStylization,
};

export default function Anchor({stylization, ...props}: TAnchor) {
    return <a {...props} className={Utils.handleStylization(stylization, props.className)}>
        {props.children}
    </a>
}
