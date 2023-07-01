import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInstruction,
  instructionInputSelector,
} from "../../../store/features/currentInput";

const Forward = ({ placeholder }) => {
  const dispatch = useDispatch();
  return (
    <div className="move-block">
      <p>
        Move forwards by{" "}
        <span>
          <input
            type="number"
            placeholder={placeholder}
            onBlur={(e) => {
              dispatch(
                addInstruction({
                  type: "forward",
                  value: parseInt(e.target.value),
                })
              );
            }}
          />{" "}
        </span>{" "}
        steps
      </p>
    </div>
  );
};

export default Forward;
