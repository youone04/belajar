//component did mount
// component did update
//component will mount

import { useEffect, useState } from "react";

const AppEffect = () => {
    const[count , setCount] = useState(0)

    useEffect(() => {
        console.log('componendDidmount');

        return () => {
            console.log('component will mount')
        }

    },[count]);

    useEffect(() => {
        console.log('componendDidmount 2');

        return () => {
            console.log('component will mount 2')
        }

    },[]);

  

    return(
        <>
        <p>Nilai : {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}
export default AppEffect;