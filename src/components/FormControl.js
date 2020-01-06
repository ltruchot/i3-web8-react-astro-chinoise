import React from "react";

function FormControl(props) {
  return (
    <div className="form-group">
      <label>{props.labelText}: </label>
      <input type="number" className="form-control" />
    </div>
  );
}

export default FormControl;
