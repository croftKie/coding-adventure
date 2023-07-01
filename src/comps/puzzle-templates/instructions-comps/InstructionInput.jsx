import React, { useState, useEffect } from "react";
import Forward from "./Forward";
import Backwards from "./Backwards";
import Right from "./Right";
import Left from "./Left";
import Repeat from "./Repeat";
import End from "./End";

const InstructionInput = ({ inputs }) => {
  return (
    <div className="instruction-input">
      {inputs.map((input) => {
        console.log(input);
        switch (input) {
          case 1:
            return <Forward placeholder={0} />;
          case 2:
            return <Backwards placeholder={0} />;
          case 3:
            return <Right placeholder={0} />;
          case 4:
            return <Left placeholder={0} />;
          case 5:
            return <Repeat placeholder={0} />;
          case 6:
            return <End placeholder={"repeat"} />;
          default:
            break;
        }
      })}
    </div>
  );
};

export default InstructionInput;
