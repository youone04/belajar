import React from "react";
import { connect } from "react-redux";
import Counter from "../Counter/Counter";

function Home({ counter, data }) {
 
  return (
    <>
      <div>Nilai {counter}</div>
      <Counter />
    </>
  );
}

const reduxState = (state) => ({
  counter: state.reducer.counter,
  data : state.reducer.data
});

export default connect(reduxState, null)(Home);
