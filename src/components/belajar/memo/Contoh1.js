import { useState , useMemo , memo, useCallback } from "react"
import Counter from "./contoh1/Counter";

const Contoh1 = () => {
    const[input , setInput] = useState('');
    let data = 'hallo'

    // data compleks harus menggunakan useMemo
    let dataArray = useMemo(() => [1,2,3,4], []);// return value
    let contoh = useCallback(() => alert('ok')); // return function

    console.log(dataArray)

    console.log(contoh)

    return(
        <>
        <input type={'text'} value={input} onChange={(e) => setInput(e.target.value)} />
        <Counter data={dataArray}/>
        </>
    )
}
export default memo(Contoh1);