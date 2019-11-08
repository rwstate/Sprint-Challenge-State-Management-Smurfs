import axios from "axios";

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURFS';

export const fetchSmurfs = () => dispatch => {
  return (
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({type: GET_SMURFS, payload: res.data})
      })
  )
}

export const postSmurf = smurf => dispatch => {
  return (
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => dispatch({type:ADD_SMURF, payload:res}))
      .catch(err => console.log('Try again! Error: ', err))
  )
}

