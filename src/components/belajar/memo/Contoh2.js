import { useCallback, useMemo, useState } from "react";
import Counter2 from "./contoh2/Counter2";

const Contoh2 = () => {
    const[coun , setCount] = useState(0);
    const[input , seInput] = useState('');

    const increment = useCallback(() => {
        setCount(prev => prev+1)
    },[setCount])

    let data= useMemo(() => [1,2,3,4,5] , [])

    return(
        <>
        <input type={'text'} value={input} onChange={(e) => seInput(e.target.value) } />
        <p>nilai  {coun}</p>
        <Counter2 increment ={increment} obj={data}/>
        </>
    )
}
export default Contoh2;