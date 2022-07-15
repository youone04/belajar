export const counterPlus = (nilai)  => (dispatch) => {
    dispatch({type: "COUNTER_PLUS" , value : [1,2,3]})
}



export const counterMinus = (nilai)  => (dispatch) => {
    dispatch({type: "COUNTER_MINUS" , value : nilai})
}