import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postSmurf, deleteSmurf } from "../actions/actions";

const SmurfForm = props => { 
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: props.startClear
  })
  const [deleteId, setDeleteId] = useState(0)

  useEffect(() => {
    setNewSmurf({
      name: '',
      age: '',
      height: '',
      id: props.startClear
    })
  }, [props.startClear])

  const handleChange = event => {
    setNewSmurf({...newSmurf, [event.target.name]:event.target.value})
  }

  const handleDeleteChange = event => {
    setDeleteId(event.target.value)
  }

  const addSmurf = smurf => {
    props.postSmurf(smurf)
  }

  const removeSmurf = id => {
    props.deleteSmurf(id)
  }

  return (
    <div>
      <div>
        <input placeholder="Name" name="name" value={newSmurf.name} onChange={handleChange}/>
        <input placeholder="Age" name="age" value={newSmurf.age} onChange={handleChange}/>
        <input placeholder="Height" name="height" value={newSmurf.height} onChange={handleChange}/>
        <button onClick={() => addSmurf(newSmurf)}>Add Smurf</button>

      </div>

      <input placeholder="Smurf ID" name="id" value={deleteId} onChange={handleDeleteChange}/>
      <button onClick={() => removeSmurf(deleteId)} >Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    startClear:state.smurfCount
  })
}

export default connect (mapStateToProps, { postSmurf, deleteSmurf })(SmurfForm);