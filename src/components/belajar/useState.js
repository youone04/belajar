import { useState } from "react";

const AppState= () => {
    const[data , setData] = useState({ data : [] })

    const handleUpdateState = () => {   
        setData((prev) => ({
            ...prev,
            data: [12,3,4,5],
        }))
    }

    return(
        <>
        <p>App state</p>
        <button onClick={() => handleUpdateState()}>Update State</button>
        </>
    )
}
export default AppState;