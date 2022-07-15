import React from "react";
import { connect } from "react-redux";
import { counterPlus } from "../../redux/action";


function Counter({ counterPlus , counter }) {
  return (
    <>
    <br/>
      <div>Counter {counter}</div>
      <button onClick={() => counterPlus(1)}>PLUS</button>
    </>
  );
}

const reduxDispatch = () => (dispatch) => {
  return {
    counterPlus: (nilai) => dispatch(counterPlus(nilai)),
  };
};

export default connect(null, reduxDispatch)(Counter);
