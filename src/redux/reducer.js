const initialState = {
  counter: 0,
  data: [],
  datasinggle : []
};

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case "COUNTER_PLUS":
      return {
        counter: state.counter + action.value,
      };
    case "COUNTER_MINUS":
      return {
        counter: state.counter - action.value,
      };
    case "GET_DATA_MAHASISWA":
      return {
        ...state,
        data: action.value,
      };
    case "GET_DATA_MAHASISWA_SINGGLE" :
      return {
        ...state,
        datasinggle: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
