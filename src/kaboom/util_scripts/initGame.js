import {
  getChapterData,
  getPuzzleData,
  getPuzzleByID,
  getGameSettings,
  getCurrentChapterInfo,
  getCurrentPuzzleInfo,
} from "../../utils/fetchData";
import { updatableSettings, chapterInfo, puzzleInfo } from "./settings";

export const init = async () => {
  const settings = await getGameSettings();
  updatableSettings.currentChapter = settings[0].current_chapter;
  updatableSettings.currentPuzzle = settings[0].current_puzzle;

  const currentChapterInfo = await getCurrentChapterInfo(
    updatableSettings.currentChapter
  );

  for (const prop in currentChapterInfo[0]) {
    puzzleInfo[prop] = currentChapterInfo[0][prop];
  }

  const currentPuzzleInfo = await getCurrentPuzzleInfo(
    updatableSettings.currentPuzzle
  );

  for (const prop in currentPuzzleInfo[0]) {
    puzzleInfo[prop] = currentPuzzleInfo[0][prop];
  }
};
