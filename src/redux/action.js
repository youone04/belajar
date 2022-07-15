export const counterPlus = (nilai)  => (dispatch) => {
    dispatch({type: "COUNTER_PLUS" , value : nilai})
}



export const counterMinus = (nilai)  => (dispatch) => {
    dispatch({type: "COUNTER_MINUS" , value : nilai})
}