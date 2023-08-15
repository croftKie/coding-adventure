import axios from "axios";

// get all chapter data
export const getChapterData = async () => {
  const { data } = await axios.get("http://localhost:6001/chapters");
  return data;
};

// get all puzzle data
export const getPuzzleData = async () => {
  const { data } = await axios.get("http://localhost:6001/puzzles");
  return data;
};

// get specific puzzle data
export const getPuzzleByID = async (type, id) => {
  const { data } = await axios.get(
    `http://localhost:6001/puzzles/${type}/${id}`
  );
  return data;
};

export const getGameSettings = async () => {
  const { data } = await axios.get("http://localhost:6001/settings");
  return data;
};

export const getCurrentChapterInfo = async (id) => {
  const { data } = await axios.get(`http://localhost:6001/chapterInfo/${id}`);
  return data;
};

export const getCurrentPuzzleInfo = async (id) => {
  const { data } = await axios.get(`http://localhost:6001/puzzleInfo/${id}`);
  return data;
};

export const setPuzzleCompletedStatus = async (puzzle_id) => {
  const { data } = await axios.get(
    `http://localhost:6001/puzzleComplete/${puzzle_id}`
  );
  return data;
};

export const updateGameSettings = async (chapter, puzzle) => {
  const { data } = await axios.get();
  return data;
};

export const setNewUser = async (userData) => {
  const { data } = await axios.get(
    `http://localhost:6001/newUser/${userData.email}/${userData.password}`
  );
  return data;
};

export const loginCheck = async (userData) => {
  const { data } = await axios.get(
    `http://localhost:6001/signin/${userData.email}/${userData.password}`
  );
  return data;
};

export const setPuzzleNumber = async (num) => {
  const { data } = await axios.get(
    `http://localhost:6001/setPuzzleNumber/${num}`
  );
  return data;
};
