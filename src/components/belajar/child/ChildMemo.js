import { memo } from "react";

const ChildMemo = ({status}) => {
    console.log(status)
    return(
        <>
        <p> Child Memo</p>
        {/* {
            status.map((data, i) => {
                return(
                    <div key={i}>
                        {data}
                    </div>
                )
            })
        } */}
        </>
    )
}
export default memo(ChildMemo);