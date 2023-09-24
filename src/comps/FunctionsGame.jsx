import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import "../css/FunctionGame.css";
import { challengeSelector } from "../store/features/challengeSlice";
import { useSelector } from "react-redux";
import Test from "../croftest/logic";
import functionLogo from "../assets/function.png";
import { updateUi } from "../store/features/UiSlice";
import { useDispatch } from "react-redux";

function FunctionsGame() {
  const editorRef = useRef(null);
  const resultsRef = useRef();
  const challengesRef = useRef();
  const currentChallengeNumberRef = useRef();
  const challenges = useSelector(challengeSelector);
  const [currentChallenge, setcurrentChallenge] = useState(0);
  const selectedChallenge = challenges[currentChallenge];
  const dispatch = useDispatch();

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue(editorRef, resultsRef) {
    const numOfTests = selectedChallenge.test_names.length;
    const codeEditorFunction = editorRef.current.getValue();
    const results = [];
    const output = [];
    for (let i = 0; i < numOfTests; i++) {
      const test = new Test(
        selectedChallenge.test_names[i],
        selectedChallenge.test_inputs[i],
        selectedChallenge.test_results[i],
        codeEditorFunction
      );
      results.push(test.test());
      output.push(test.getFunctionOutput());
    }

    const statusArr = [];
    const resultArr = [];
    Array.from(resultsRef.current.children).forEach((child) => {
      const childArr = Array.from(child.children);
      if (
        childArr.length === 1 &&
        childArr[0].classList.contains("statusText")
      ) {
        statusArr.push(childArr[0]);
      }
      if (
        childArr.length === 1 &&
        childArr[0].classList.contains("resultText")
      ) {
        resultArr.push(childArr[0]);
      }
    });

    statusArr.forEach((resultSpace, index) => {
      resultSpace.innerText = results[index];
    });
    resultArr.forEach((resultSpace, index) => {
      resultSpace.innerText = output[index];
    });

    const hasPassedChecks = results.map((el) => {
      return el !== "PASSED" ? 0 : 1;
    });

    if (!hasPassedChecks.includes(0)) {
      challengesRef.current.classList.add("complete");
    }
  }

  function changeClass(e) {
    Array.from(challengesRef.current.children).forEach((child) => {
      child.classList.remove("active");
    });
    e.target.classList.add("active");
    currentChallengeNumberRef.current = e.target;
  }

  return (
    <div className="root-content">
      <div className="nav">
        <div>
          <img src={functionLogo} alt="" />
          <h1>CodeVenture</h1>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("splash");
            localStorage.setItem("splash", 0);
            dispatch(updateUi("splashScreen"));
          }}
        >
          Go Back
        </button>
      </div>
      <div className="content">
        <div className="editor-pane">
          <div className="language">
            <select name="" id="">
              <option value="">JavaScript</option>
            </select>
            <p>
              All functions will take an "args" parameter which will be an array
              containing the values.
            </p>
          </div>
          <Editor
            height="75vh"
            defaultLanguage="javascript"
            defaultValue={selectedChallenge.test_placeholder}
            onMount={handleEditorDidMount}
          />
          <div ref={challengesRef} className="challenges">
            {challenges.map((challenge, index) => {
              return (
                <p
                  className={index === 0 ? "default active" : "default"}
                  onClick={(e) => {
                    setcurrentChallenge(index);
                    changeClass(e);
                  }}
                >
                  {index + 1}
                </p>
              );
            })}
          </div>
        </div>
        <div className="results-pane">
          <div className="controls">
            <h3>Challenge Description</h3>
            <p>{selectedChallenge.test_description}</p>
          </div>
          <div ref={resultsRef} className="results">
            <p>Console://</p>
            {selectedChallenge.test_names.map((name, index) => {
              return (
                <>
                  <p>
                    Test {index} - {name}
                  </p>
                  <p>
                    Result: <span className="resultText"></span>
                  </p>
                  <p>
                    Status: <span className="statusText"></span>
                  </p>
                  <br />
                </>
              );
            })}
          </div>
          <div className="controls">
            <button
              onClick={() => {
                showValue(editorRef, resultsRef);
              }}
            >
              Compile & Execute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunctionsGame;
