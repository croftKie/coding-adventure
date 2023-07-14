import React from "react";

const Msg = (props) => {
  console.log(props);
  const closeToast = props.closeToast;
  const toastProps = props.toastProps;
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
