import React from 'react'
import { connect } from "react-redux";

function Child(props) {
  return (
    <div>Child Nilai {props.footer}</div>
  )
}
const reduxState = (state) => ({
  footer: state.reducer.counter,
});

export default connect(reduxState, null)(Child)