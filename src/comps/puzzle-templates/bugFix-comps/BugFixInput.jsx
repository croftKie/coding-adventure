import React, { useState, useEffect } from "react";
import Forward from "./Forward";
import Backwards from "./Backwards";
import Right from "./Right";
import Left from "./Left";
import Repeat from "./Repeat";
import End from "./End";

const BugFixInput = ({ inputs }) => {
  console.log(inputs);
  return (
    <div className="bug-fix-input">
      {inputs.map((input, index) => {
        console.log(input);
        switch (input.type) {
          case "forward":
            return <Forward placeholder={input.value} index={index} />;
          case "backwards":
            return <Backwards placeholder={input.value} index={index} />;
          case "right":
            return <Right placeholder={input.value} index={index} />;
          case "left":
            return <Left placeholder={input.value} index={index} />;
          case "repeat":
            return <Repeat placeholder={input.value} index={index} />;
          case "end":
            return <End placeholder={input.value} index={index} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default BugFixInput;
