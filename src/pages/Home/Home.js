import React from "react";
import { connect } from "react-redux";
import Counter from "../Counter/Counter";

function Home({ counter, data }) {
  console.log(data)

 
  return (
    <>
      <div>Nilai {counter}</div>
      {
        data.map((d , i) => {
          return <p key={i}>hello</p>
        })
      }
      <Counter />
    </>
  );
}

const reduxState = (state) => ({
  counter: state.reducer.counter,
  data : state.reducer.data
});

export default connect(reduxState, null)(Home);
