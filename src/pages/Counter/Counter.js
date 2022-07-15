import React from "react";
import { connect } from "react-redux";
import { counterPlus , counterMinus } from "../../redux/action";


function Counter({ counterPlus , counter , counterMinus  }) {
  return (
    <>
    <br/>
      <div>Counter {counter}</div>
      <button onClick={() => counterPlus(1)}>PLUS</button>
      <button onClick={() => counterMinus(1)}>MINUS</button>
    </>
  );
}

const reduxDispatch = () => (dispatch) => {
  return {
    counterPlus: (nilai) => dispatch(counterPlus(nilai)),
    counterMinus: (nilai) => dispatch(counterMinus(nilai)),
  };
};

export default connect(null, reduxDispatch)(Counter);
