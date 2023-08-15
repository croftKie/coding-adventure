import kaboom from "kaboom";
import { assetLoader, soundLoader } from "./assetLoader";
import { puzzleInfo, settings, updatableSettings } from "./settings";
import { movementManager, animManager } from "./movementManager";
import { walkSound } from "./soundManager";
import { levels, options } from "./levelManager";
import {
  getChapterData,
  getPuzzleData,
  getPuzzleByID,
  getGameSettings,
  setPuzzleNumber,
} from "../utils/fetchData";
import { init } from "./initGame";

export function gameManager(gameRef, width, height, endGame, updatePuzzle) {
  kaboom({ width: width, height: height, canvas: gameRef });
  soundLoader();
  assetLoader();
  setGravity(settings.GRAVITY);
  const walk = walkSound();

  scene("tut-1", async () => {
    await init();
    const background = add([sprite(puzzleInfo.puzzle_bg_asset)]);
    const bgTut = add([
      pos(width / 2, height / 2),
      rect(width / 2, height - 40),
      anchor("center"),
      outline(4),
      area(),
    ]);

    const tutorialScreen = add([
      sprite(`tut-${settings.current_tutorial}`),
      scale(0.7),
      pos(width / 2, height / 2),
      anchor("center"),
    ]);

    if (settings.current_tutorial > 1) {
      const backButton = add([
        sprite("previous"),
        pos(width / 2 - 370, 100),
        anchor("center"),
        area(),
        scale(0.1),
        "back",
      ]);
      backButton.onClick(() => {
        play("click", { volume: 0.4, speed: 1.2 });
        settings.current_tutorial -= 1;
        tutorialScreen.use(sprite(`tut-${settings.current_tutorial}`));
        go("tut-1");
      });
    }

    if (settings.current_tutorial < 4) {
      const forwardButton = add([
        sprite("next"),
        pos(width / 2 + 370, 100),
        anchor("center"),
        area(),
        scale(0.1),
        "forward",
      ]);
      forwardButton.onClick(() => {
        play("click", { volume: 0.4, speed: 1.2 });
        settings.current_tutorial += 1;
        sprite(`tut-${settings.current_tutorial}`), go("tut-1");
      });
    }

    if (settings.current_tutorial === 4) {
      const exitButton = add([
        sprite("close"),
        pos(width / 2 + 370, 100),
        anchor("center"),
        area(),
        scale(0.1),
        "forward",
      ]);
      exitButton.onClick(() => {
        play("click", { volume: 0.4, speed: 1.2 });
        go("1-1");
      });
    }
  });

  scene("1-1", async () => {
    //variable initialisation and level asset setup
    let groundtiles;
    const background = add([sprite(puzzleInfo.puzzle_bg_asset)]);
    const levelBG = add([
      sprite(
        settings.levelRef[updatableSettings.currentChapter - 1][
          updatableSettings.currentPuzzle - 1
        ]
      ),
    ]);
    groundtiles = addLevel(
      levels[updatableSettings.currentChapter - 1][
        updatableSettings.currentPuzzle - 1
      ],
      options[0]
    );

    invisWallCreator([16, 2000], [-20, 0]);
    invisWallCreator([16, 2000], [width, 0]);
    invisWallCreator([2000, 16], [0, 0]);
    initHUDAssets();
    HUDInteractionManager();

    // player initialisation
    const player = add([
      pos(80, height - 118),
      scale(settings.PLAYER_SCALE),
      area({ shape: new Rect(vec2(0), 100, 100) }),
      anchor("bot"),
      body({ stickToPlatform: true }),
      "char",
    ]);
    player.use(sprite("char_idle"));
    player.play("idle");
    movementManager(player, settings, walk);
    animManager(player, settings, walk);

    // Collision functions
    onCollide("char", "puzzle", (char, puzzle) => {
      const left = puzzle.worldArea().pts[0];
      const right = puzzle.worldArea().pts[2];

      const puzzleKey = add([
        sprite("key"),
        pos(left.x + (right.x - left.x) / 2, left.y - (right.y - left.y) / 4),
        scale(1),
        anchor("bot"),
        area(),
        "key",
      ]);

      const popup = onKeyPress("e", async () => {
        const puzzleData = await getPuzzleByID(
          puzzleInfo.puzzle_type,
          puzzleInfo.puzzle_id
        );
        updatePuzzle(puzzleInfo, puzzleData);
      });
      onCollideEnd("char", "puzzle", () => {
        puzzleKey.destroy();
        popup.cancel();
      });
    });

    onCollide("char", "arrow", (char, arrow) => {
      // check if puzzle had been completed

      if (true) {
        const left = arrow.worldArea().pts[0];
        const right = arrow.worldArea().pts[2];
        const puzzleStar = add([
          sprite("star"),
          pos(left.x + (right.x - left.x) / 2, left.y - (right.y - left.y) / 4),
          scale(1),
          anchor("bot"),
          area(),
          "star",
        ]);
        const change = onKeyPress("e", () => {
          // change puzzle number in databse settings
          setPuzzleNumber(updatableSettings.currentPuzzle + 1);
          init();

          background.use(sprite(puzzleInfo.puzzle_bg_asset));
          levelBG.use(
            sprite(settings.levelRef[settings.chapter][settings.level])
          );
          groundtiles.destroy();
          groundtiles = addLevel(
            levels[updatableSettings.currentChapter - 1][
              updatableSettings.currentPuzzle - 1
            ],
            options[0]
          );
          player.flipX = !player.flipX;
        });
        onCollideEnd("char", "arrow", () => {
          puzzleStar.destroy();
          change.cancel();
        });
      }
    });

    onCollide("char", "exit", (char, exit) => {
      const left = exit.worldArea().pts[0];
      const right = exit.worldArea().pts[2];

      const puzzleStar = add([
        sprite("star"),
        pos(left.x + (right.x - left.x) / 2, left.y - (right.y - left.y) / 4),
        scale(1),
        anchor("bot"),
        area(),
        "star",
      ]);

      const change = onKeyPress("e", () => {
        settings.level = 0;
        changeActivePuzzle(settings.level);
        settings.chapter += 1;
        changeActiveChapter(settings.chapter);

        background.use(
          sprite(settings.bgRef[settings.chapter][settings.level])
        );
        levelBG.use(
          sprite(
            settings.levelRef[updatableSettings.currentChapter - 1][
              updatableSettings.currentPuzzle - 1
            ]
          )
        );

        groundtiles.destroy();

        groundtiles = addLevel(
          levels[settings.chapter][settings.level],
          options[0]
        );
        player.flipX = !player.flipX;
      });

      onCollideEnd("char", "exit", () => {
        puzzleStar.destroy();
        change.cancel();
      });
    });

    onCollide("char", "exit_final", () => {
      const puzzleText = add([
        text(`End Game`, {
          size: settings.TEXT_SIZE,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);
      const change = onKeyPress("e", () => {
        endGame();
      });
      onCollideEnd("char", "exit", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });

    const dialogue_options = [
      "Welcome to Cyberspace!",
      "I'm Byte! Hi!",
      "You're not a program.",
      "Did you get stuck here?",
      "You'll need to get thinking...",
      "if you want to get out of here.",
      "There are lots of puzzles here...",
      "logic, bug fixing and riddles.",
      "By the time you escape...",
      "you'll be thinking like a coder!",
    ];
    let index = 0;
    const l = loop(2, () => {
      const bg = add([
        rect(500, 75),
        pos(width / 2, 100),
        anchor("center"),
        lifespan(2),
      ]);
      const byte = add([
        sprite("byte"),
        pos(width / 2 - 200, 100),
        anchor("center"),
        scale(0.15),
      ]);
      const dialogue = add([
        text(dialogue_options[index], { size: 20 }),
        pos(width / 2 + 20, 100),
        anchor("center"),
        lifespan(2),
        color(0, 0, 0),
      ]);
      index++;
      if (index === dialogue_options.length) {
        l.cancel();
      }
    });
  });

  go("tut-1");
}

// Initialisation Functions
// Calling these sets up the background assets and initial settings
// Refer above for preferred call point

function initHUDAssets() {
  const note = add([sprite("note"), pos(20, 20), area(), scale(0.1), "note"]);
  const question = add([
    sprite("question"),
    pos(100, 20),
    area(),
    scale(0.1),
    "question",
  ]);
}

function HUDInteractionManager() {
  let playing = false;
  const forestMusic = play("forest_music", {
    speed: 1,
    volume: 0.1,
    loop: true,
    paused: true,
  });

  onHover("note", (e) => {
    e.flipX = true;
    setCursor("pointer");
  });
  onHoverEnd("note", (e) => {
    e.flipX = false;
    setCursor("default");
  });
  onClick("note", () => {
    play("click", { volume: 0.4, speed: 1.2 });
    if (!playing) {
      forestMusic.paused = false;
      playing = true;
    } else {
      forestMusic.paused = true;
    }
  });

  onHover("question", (e) => {
    e.flipX = true;
    setCursor("pointer");
  });
  onHoverEnd("question", (e) => {
    e.flipX = false;
    setCursor("default");
  });
  onClick("question", () => {
    play("click", { volume: 0.4, speed: 1.2 });
    settings.current_tutorial = 1;
    go("tut-1");
  });
}

function invisWallCreator(size, position) {
  add([
    rect(size[0], size[1]),
    area(),
    body({ isStatic: true }),
    pos(position[0], position[1]),
    opacity(0),
  ]);
}

function addAsset(spriteRef, scaleRef, position, tag) {
  add([
    sprite(spriteRef),
    area(),
    scale(scaleRef),
    body({ isStatic: true }),
    pos(position[0], position[1]),
    tag,
  ]);
}
