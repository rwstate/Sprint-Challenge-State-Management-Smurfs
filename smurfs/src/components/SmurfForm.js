import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/actions";

const SmurfForm = props => { 
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })

  useEffect(() => {
    setNewSmurf({
      name: '',
      age: '',
      height: ''
    })
  }, [props.startClear])

  const handleChange = event => {
    setNewSmurf({...newSmurf, [event.target.name]:event.target.value})
  }

  const addSmurf = smurf => {
    props.postSmurf(smurf)
  }

  return (
    <div>
      <input placeholder="Name" name="name" value={newSmurf.name} onChange={handleChange}/>
      <input placeholder="Age" name="age" value={newSmurf.age} onChange={handleChange}/>
      <input placeholder="Height" name="height" value={newSmurf.height} onChange={handleChange}/>
      <button onClick={() => addSmurf(newSmurf)}>Add Smurf</button>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    startClear:state.smurfCount
  })
}

export default connect (mapStateToProps, { postSmurf })(SmurfForm);