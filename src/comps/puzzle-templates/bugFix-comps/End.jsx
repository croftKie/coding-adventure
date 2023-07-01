import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInstruction,
  instructionInputSelector,
} from "../../../store/features/currentInput";

const End = ({ placeholder }) => {
  const dispatch = useDispatch();
  return (
    <div className="move-block">
      <p>
        End{" "}
        <span>
          <input
            type="text"
            placeholder={placeholder}
            onBlur={(e) => {
              dispatch(addInstruction({ type: "end", value: e.target.value }));
            }}
          />{" "}
        </span>{" "}
        block
      </p>
    </div>
  );
};

export default End;
