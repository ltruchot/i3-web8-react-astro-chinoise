import React from "react";
const Sign = props => {
  const imgPath = "images/" + props.animal.name + ".jpg";
  return (
    <div className="card">
      <img src={imgPath} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.animal.name}</h5>
        <p className="card-text">{props.animal.desc}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Sign;
