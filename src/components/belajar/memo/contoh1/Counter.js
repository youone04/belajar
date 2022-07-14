import { useRef ,memo } from "react";

const Counter = (props) => {
    const render = useRef(0);
    console.log('renders =>', props.data)

    return(
        <>
        <button>+</button>
        </>
    )
}
export default memo(Counter);