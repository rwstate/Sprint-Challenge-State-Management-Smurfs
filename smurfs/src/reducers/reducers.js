import { GET_SMURFS } from "../actions/actions";
import { ADD_SMURF } from "../actions/actions";
const initialState = { 
  smurfs: [],
  smurfCount: 1
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_SMURFS:
      console.log(action.payload);
      return {
        ...state, smurfs: action.payload
      };
    case ADD_SMURF:
      return {
        ...state, smurfCount: state.smurfCount +1
      }

    default:
      return state;
  }
}

export default reducer;