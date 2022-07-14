import { useEffect, useState } from "react";


const CleanUp1 = () => {
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('component did mount');

        return () => {
            console.log('compoentn will mount')
        }

    },[counter])

    return(
        <>
        <p>Nilai {counter}</p>
        <button onClick={() => setCounter(counter => counter + 1)}>counter</button>
        </>
    )

}

export default CleanUp1;