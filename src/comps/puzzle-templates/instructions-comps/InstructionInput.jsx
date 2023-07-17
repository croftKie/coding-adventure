import React from "react";
import { useDispatch } from "react-redux";
import { addInstruction } from "../../../store/features/currentInput";

const InstructionInput = ({ inputs }) => {
  const dispatch = useDispatch();
  return (
    <div className="instruction-input">
      {inputs.map((input) => {
        switch (input) {
          case 1:
            return (
              <div className="move-block">
                <p>
                  moveForward(
                  <span>
                    <input
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                      type="number"
                      placeholder="0"
                      onBlur={(e) => {
                        dispatch(
                          addInstruction({
                            type: "forward",
                            value: parseInt(e.target.value),
                          })
                        );
                      }}
                    />
                  </span>
                  );
                </p>
              </div>
            );
          case 2:
            return (
              <div className="move-block">
                <p>
                  moveBackwards(
                  <span>
                    <input
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                      type="number"
                      placeholder="0"
                      onBlur={(e) => {
                        dispatch(
                          addInstruction({
                            type: "backwards",
                            value: parseInt(e.target.value),
                          })
                        );
                      }}
                    />
                  </span>
                  );
                </p>
              </div>
            );
          case 3:
            return (
              <div className="move-block">
                <p>
                  moveRight(
                  <span>
                    <input
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                      type="number"
                      placeholder="0"
                      onBlur={(e) => {
                        dispatch(
                          addInstruction({
                            type: "right",
                            value: parseInt(e.target.value),
                          })
                        );
                      }}
                    />
                  </span>
                  );
                </p>
              </div>
            );
          case 4:
            return (
              <div className="move-block">
                <p>
                  moveLeft(
                  <span>
                    <input
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                      type="number"
                      placeholder="0"
                      onBlur={(e) => {
                        dispatch(
                          addInstruction({
                            type: "left",
                            value: parseInt(e.target.value),
                          })
                        );
                      }}
                    />
                  </span>
                  );
                </p>
              </div>
            );
          case 5:
            return (
              <div className="move-block">
                <p>
                  Repeat(
                  <span>
                    <input
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                      }}
                      placeholder="0"
                      type="number"
                      onBlur={(e) => {
                        dispatch(
                          addInstruction({
                            type: "repeat",
                            value: e.target.value,
                          })
                        );
                      }}
                    />
                  </span>
                  );
                </p>
              </div>
            );
          case 6:
            return (
              <div className="move-block">
                <p>
                  end(
                  <span>
                    <input
                      type="text"
                      value="repeat"
                      onBlur={(e) => {
                        dispatch(
                          addInstruction({ type: "end", value: e.target.value })
                        );
                      }}
                    />{" "}
                  </span>{" "}
                  );
                </p>
              </div>
            );
          default:
            break;
        }
      })}
    </div>
  );
};

export default InstructionInput;
