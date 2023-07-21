export const settings = {
  SPEED: 300,
  GRAVITY: 800,
  PLAYER_SCALE: 0.8,
  TEXT_SIZE: 45,

  level: 0,
  chapter: localStorage.getItem("lastChapterCompleted")
    ? parseInt(localStorage.getItem("lastChapterCompleted")) + 1
    : 0,
  level_options: 0,
  current_tutorial: 1,
  bgRef: [
    ["1-0", "1-1", "1-2"],
    ["2-1", "2-2", "2-3"],
    ["3-1", "3-2", "3-3"],
    ["4-1", "4-2", "4-3"],
  ],
};
