export const settings = {
  SPEED: 300,
  GRAVITY: 1200,
  PLAYER_SCALE: 0.8,
  TEXT_SIZE: 45,

  level: 0,
  chapter: localStorage.getItem("lastChapterCompleted")
    ? parseInt(localStorage.getItem("lastChapterCompleted")) + 1
    : 0,
  level_options: 0,
  current_tutorial: 1,
  levelRef: [
    ["l1", "l2", "l3"],
    ["l4", "l5", "l6"],
    ["l7", "l8", "l9"],
    ["l10", "l11", "l12"],
  ],
};

export const updatableSettings = {
  currentChapter: 2,
  currentPuzzle: 2,
};

export const chapterInfo = {};

export const puzzleInfo = {};
