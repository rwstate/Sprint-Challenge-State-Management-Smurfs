import React from "react";
import "./App.css";
import { connect } from "react-redux";
import SmurfForm from "./SmurfForm"

import { fetchSmurfs } from "../actions/actions"


const App = props => {
  const getSmurfs = () => {
    props.fetchSmurfs();
  }

  return (
    <div className="App">
      <SmurfForm />
      <button onClick={getSmurfs}>Update Smurfs</button>
      {props.smurfs.map(smurf => <p key={smurf.name}>{smurf.name}</p>)}
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    smurfs: state.smurfs
  })
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
