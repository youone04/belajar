import { useEffect, useState } from "react";

const ChildCleanUp = () => {
    const onScroll = () => {
        console.log(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    },[])
}

const CleanUp3 = () => {
    const[showChild , setShowChild] = useState(true)

    return(
        <>
        <button onClick={() => setShowChild(!showChild)}>show/hide</button>

        <div>
            <div style={{height: 300}}>
                Parent Text
            </div>
            <div style={{height: 300}}>
                Parent Text
            </div>
            <div style={{height: 300}}>
                Parent Text
            </div>
            <div style={{height: 300}}>
                Parent Text
            </div>
        {
            showChild && <ChildCleanUp/>
        }
            
        </div>
        </>
    )
}
export default CleanUp3;