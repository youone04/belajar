export const counter = (a) => (dispatch) => {
   
          dispatch({ type: 'COUNTER', value: a })
  
  }