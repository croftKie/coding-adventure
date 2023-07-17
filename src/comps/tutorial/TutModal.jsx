import React from "react";

const Msg = (props) => {
  const tutorial = props.tutorial;
  return (
    <div className="tutorial">
      <h3>{tutorial.name}</h3>
      <ul>
        {tutorial.text.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Msg;
