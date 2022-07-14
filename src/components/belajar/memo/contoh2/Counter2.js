import { memo } from "react";

const Counter2 = ({increment,obj}) => {
    console.log(obj)
    return(
        <>
        <button onClick={increment}>+</button>
        </>
    )
}
export default memo(Counter2);