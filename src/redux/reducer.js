const intitiasiStateGlobal = {
    counter: 0

};

const reducer = (state = intitiasiStateGlobal, action) => {

    switch (action.type) {
        case 'COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            }

        default: return state
    }


}
export default reducer;