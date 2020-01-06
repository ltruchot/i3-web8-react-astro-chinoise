import React from "react";
/* <List items={["toto", "titi", "tata"]}></List> */
const List = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <ul className={props.cssClass}>
        {props.items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default List;
