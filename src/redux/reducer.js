const initialState = {
    counter: 0,
    data : [1,2]
}

const reducer = (state = initialState , action) => {

    switch(action.type){
        case "COUNTER_PLUS":
            return{
                counter : action.value
            }
        case "COUNTER_MINUS":
                return{
                    counter : state.counter - action.value
            }
        default : return state;
    }
}

export default reducer;