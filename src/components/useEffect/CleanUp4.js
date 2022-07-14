import { useEffect, useState } from "react"

const FethcChild = () => {
    const[posts, setPosts] = useState(null);
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(() => {
        let isUnmount = false;
            const getPost = async () => {
                await timeout(1000)
                const postFetch = await fetch(`https://jsonplaceholder.typicode.com/photos`)
                const json = await postFetch.json();
                setPosts(json);
            }
            if(!isUnmount){
            getPost()
            }
            return () => {
                isUnmount = true
                console.log('willmount')
            }
    },[])

    return(
        <>
        {!posts && <p>Loading ...</p>}
        {
            posts && posts.map((d, i) => {
               return(
                <div key={i}>
                    <p>{d.title}</p>
                </div>
               )
            })
        }
        </>
    )
}
const CleanUp4 = () => {
    const[showChild , setShowChild] = useState(true)

    return(
        <>
        <button onClick={() => setShowChild(!showChild)}>show/hide</button>

        {
            showChild && <FethcChild/>
        }
        </>
    )
}
export default CleanUp4;