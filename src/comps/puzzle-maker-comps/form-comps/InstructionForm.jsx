import React from "react";
import { images } from "../../../utils/images";

const InstructionForm = ({ puzzleType, handleSubmit }) => {
  const bg = `url(${images.bgAssets[0]})`;
  return (
    <>
      <div className="upperContent">
        <input type="text" placeholder="Puzzle Name" />
        <input type="text" placeholder="Puzzle Description" />
      </div>
      <div className="characterImg image">
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
      </div>
      <div className="characterLoc loc">
        <p>Character Starting Location:</p>
        <input type="text" placeholder="Puzzle Name" />
        <input type="text" placeholder="Puzzle Description" />
      </div>
      <div className="goalImg image">
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
      </div>
      <div className="goalLoc loc">
        <p>Goal Starting Location:</p>
        <input type="text" placeholder="Puzzle Name" />
        <input type="text" placeholder="Puzzle Description" />
      </div>
      <div className="backgroundImg image">
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
        <img src={images.bgAssets[0]} alt="" />
      </div>
      <div className="buttons">
        <button>Reset</button>
        <button>Submit</button>
      </div>
    </>
  );
};

export default InstructionForm;
