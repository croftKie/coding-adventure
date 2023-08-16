import React, { useState, useEffect } from "react";
import Forward from "./Forward";
import Backwards from "./Backwards";
import Right from "./Right";
import Left from "./Left";
import Repeat from "./Repeat";
import End from "./End";

const BugFixInput = ({ inputs, changeInput }) => {
  console.log(inputs);
  return (
    <div className="bug-fix-input">
      {inputs.map((input, index) => {
        switch (input.input_type) {
          case "forward":
            return (
              <Forward
                changeInput={changeInput}
                placeholder={input.input_value}
                index={index}
              />
            );
          case "backwards":
            return (
              <Backwards
                changeInput={changeInput}
                placeholder={input.input_value}
                index={index}
              />
            );
          case "right":
            return (
              <Right
                changeInput={changeInput}
                placeholder={input.input_value}
                index={index}
              />
            );
          case "left":
            return (
              <Left
                changeInput={changeInput}
                placeholder={input.input_value}
                index={index}
              />
            );
          case "repeat":
            return (
              <Repeat
                changeInput={changeInput}
                placeholder={input.input_value}
                index={index}
              />
            );
          case "end":
            return <End placeholder={input.input_value} index={index} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default BugFixInput;
