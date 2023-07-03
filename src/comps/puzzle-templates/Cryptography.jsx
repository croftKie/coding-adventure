import React, { useState, useEffect, useRef } from "react";

const Cryptography = () => {
  return (
    <div className="cryptography-puzzle">
      <div className="content">
        <div className="input">
          <div className="parts-buttons">
            <button>Part One</button>
            <button>Part Two</button>
            <button>Part Three</button>
          </div>
          <div className="cryptography-input">
            <div className="clues">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                architecto ullam eum. Dicta quae distinctio illum debitis, quo
                atque deserunt maxime error suscipit expedita facilis
                repudiandae delectus est asperiores officia?
              </p>
            </div>
          </div>
          <div className="input-values">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div className="result">
          <div className="part-one">
            <p>X - X - X</p>
          </div>
          <div className="part-two">
            <p>X - X - X</p>
          </div>
          <div className="part-three">
            <p>X - X - X</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="reset">Reset</button>
        <button className="run">Run</button>
      </div>
    </div>
  );
};

export default Cryptography;
