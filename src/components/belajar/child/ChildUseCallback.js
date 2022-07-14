import { memo } from "react";

const ChildCallback = ({handleIncrement}) => {
    console.log('1')
    return(
        <>
        <button onClick={handleIncrement}>+</button>
        </>
    )
}
export default memo(ChildCallback);