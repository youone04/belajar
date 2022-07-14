import { useCallback, useMemo, useState } from "react";
import ChildUseCallback from "./child/ChildUseCallback";

const AppCallback = () => {
    const[inc , setInc] = useState(0)

    const data = useCallback(() =>  setInc(prev => prev + 1) , [setInc]);

    return(
        <>
        <p>Hallo Callback</p>
        <p>Nilai : {inc}</p>
        <ChildUseCallback handleIncrement={data}/>
        </>
    )
}

export default  AppCallback;