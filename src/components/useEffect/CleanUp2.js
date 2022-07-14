import { useEffect, useState } from "react";

const CleanUpChild = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('component did mount');

        return () => {
            console.log('component will moubt')
        }
    },[])

    return(
        <>
        <p>Nilai {counter}</p>
        <button onClick={() => setCounter(counter => counter + 1)}>counter</button>
        </>
    )
}

const CleanUp2 = () => {
    const[showChild , setShowChild] = useState(true)
    return(
        <>
        <button onClick={() => setShowChild(!showChild)}>show/hide child</button>

        {
            showChild && <CleanUpChild/>
        }
        </>
    )
}
export default CleanUp2;