import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Left = ({ placeholder, index, changeInput }) => {
  const dispatch = useDispatch();
  return (
    <div className="move-block">
      <p>
        Move left by{" "}
        <span>
          <input
            type="number"
            placeholder={placeholder}
            onBlur={(e) => {
              changeInput([index, parseInt(e.target.value)]);
            }}
          />{" "}
        </span>{" "}
        steps
      </p>
    </div>
  );
};

export default Left;
