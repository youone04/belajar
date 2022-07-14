import React from 'react'
import { connect } from "react-redux";
import { counter } from '../../redux/action';
import Child from './Child';


function CounterRedux(props) {

  return (
    <>
    <div>Nilai {props.footer}</div>
    <button onClick={() => props.counter(3)}>Tambah</button>
    <Child/>
    </>
  )
}
const reduxState = (state) => ({
    footer: state.reducer.counter,
  });

const reduxDispatch = () => (dispatch) => {
    return {
      counter: (a) => dispatch(counter(a)),
    
    };
  };
export default connect(reduxState, reduxDispatch)(CounterRedux)
