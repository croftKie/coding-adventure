import React, { useState, useEffect } from "react";
import { images } from "../../../utils/images";
import axios from "axios";
import {
  addLeaderboardData,
  getLeaderboard,
} from "../../../store/features/leaderboardSlice";
import { useDispatch, useSelector } from "react-redux";

const Leaderboard = () => {
  const leaderboard = useSelector(getLeaderboard);
  const dispatch = useDispatch();
  const [submittedData, setSubmittedData] = useState(false);
  useEffect(() => {
    async function fetchLeaderboard() {
      const { data } = await axios.get(
        "http://dreamlo.com/lb/64aaa9638f40bc8fb0a4b9e8/json"
      );
      const lb = data.dreamlo.leaderboard.entry;
      dispatch(addLeaderboardData(lb));
    }
    fetchLeaderboard();
  }, [submittedData]);

  const handleSubmit = async (value) => {
    const { data } = await axios.get(
      `http://dreamlo.com/lb/S2H_0_eAnkiuWL7AB9mYEQ4UH7Fkl7JkqivBWSTd5ZgQ/add/${value}/100`
    );
    console.log(data);
    setSubmittedData(!submittedData);
  };

  console.log(leaderboard);
  return (
    <div className="leaderboard">
      <div className="board">
        {leaderboard.map((item) => {
          return (
            <div className="card">
              <div className="number">
                <h4>:D</h4>
              </div>
              <h4>{item.name}</h4>
              <p>{item.score}</p>
            </div>
          );
        })}
      </div>
      <div className={"addToBoard"}>
        <div className={"title"}>
          <h1>CodeVenture Leaderboard</h1>
          <p>Add your name to the leaderboard</p>
        </div>
        <div className={"nameInput"}>
          <p>What is your name?</p>
          <input
            onBlur={(e) => {
              handleSubmit(e.target.value);
            }}
            type={"text"}
          />
        </div>
        <div className={"currentScore"}>
          <p>Current Score:</p>
          <p>1000</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
