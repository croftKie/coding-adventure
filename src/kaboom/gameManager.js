import kaboom from "kaboom";
import { assetLoader } from "./assetLoader";
import { settings } from "./settings";
import { levels, options } from "./levelManager";
import { soundLoader } from "./assetLoader";
import { movementManager, animManager } from "./movementManager";
import { walkSound } from "./soundManager";

export function gameManager(
  gameRef,
  width,
  height,
  toggleUi,
  changeActivePuzzle,
  changeActiveChapter,
  endGame
) {
  kaboom({ width: width, height: height, canvas: gameRef });
  soundLoader();
  assetLoader();
  setGravity(settings.GRAVITY);
  const walk = walkSound();

  scene("tut-1", () => {
    const background = add([
      sprite(settings.bgRef[settings.chapter][settings.level]),
    ]);
    const groundtiles = addLevel(
      levels[settings.chapter][settings.level],
      options[settings.chapter]
    );
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
        rect(50, 50),
        pos(width / 2 - 370, 100),
        anchor("center"),
        area(),
        "back",
      ]);
      const backButtonText = add([
        text("<<"),
        pos(width / 2 - 370, 100),
        anchor("center"),
        color(1, 0, 0),
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
        rect(50, 50),
        pos(width / 2 + 370, 100),
        anchor("center"),
        area(),
        "forward",
      ]);
      const forwardButtonText = add([
        text(">>"),
        pos(width / 2 + 370, 100),
        anchor("center"),
        color(1, 0, 0),
      ]);
      forwardButton.onClick(() => {
        play("click", { volume: 0.4, speed: 1.2 });
        settings.current_tutorial += 1;
        sprite(`tut-${settings.current_tutorial}`), go("tut-1");
      });
    }

    if (settings.current_tutorial === 4) {
      const exitButton = add([
        rect(50, 50),
        pos(width / 2 + 370, 100),
        anchor("center"),
        area(),
        "forward",
      ]);
      const exitButtonText = add([
        text("!"),
        pos(width / 2 + 370, 100),
        anchor("center"),
        color(1, 0, 0),
      ]);
      exitButton.onClick(() => {
        play("click", { volume: 0.4, speed: 1.2 });
        go("1-1");
      });
    }
  });

  scene("1-1", () => {
    //variable initialisation and level asset setup
    let groundtiles;
    let puzzleComplete = false;
    const background = add([
      sprite(settings.bgRef[settings.chapter][settings.level]),
    ]);
    groundtiles = addLevel(
      levels[settings.chapter][settings.level],
      options[settings.chapter]
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
    onCollide("char", "puzzle", () => {
      const puzzleText = add([
        text(`Press "E" to open the next puzzle`, {
          size: settings.TEXT_SIZE,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const popup = onKeyPress("e", () => {
        toggleUi("popUp");
      });
      onCollideEnd("char", "puzzle", () => {
        puzzleComplete = true;
        puzzleText.destroy();
        popup.cancel();
      });
    });

    onCollide("char", "arrow", () => {
      if (puzzleComplete) {
        const puzzleText = add([
          text(`Go to the next puzzle`, {
            size: settings.TEXT_SIZE,
          }),
          pos(width / 2, height - 50),
          anchor("center"),
        ]);
        const change = onKeyPress("e", () => {
          settings.level += 1;
          changeActivePuzzle(settings.level);

          background.use(
            sprite(settings.bgRef[settings.chapter][settings.level])
          );
          groundtiles.destroy();
          groundtiles = addLevel(
            levels[settings.chapter][settings.level],
            options[settings.chapter]
          );
          player.flipX = !player.flipX;
        });
        onCollideEnd("char", "arrow", () => {
          puzzleText.destroy();
          change.cancel();
        });
      } else {
        const puzzleText = add([
          text(`Complete the puzzle first`, {
            size: settings.TEXT_SIZE,
          }),
          pos(width / 2, height - 50),
          anchor("center"),
        ]);
        onCollideEnd("char", "arrow", () => {
          puzzleText.destroy();
        });
      }
    });

    onCollide("char", "exit", () => {
      const puzzleText = add([
        text(`Go to the next puzzle`, {
          size: settings.TEXT_SIZE,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level = 0;
        changeActivePuzzle(settings.level);
        settings.chapter += 1;
        changeActiveChapter(settings.chapter);

        background.use(
          sprite(settings.bgRef[settings.chapter][settings.level])
        );
        groundtiles.destroy();

        groundtiles = addLevel(
          levels[settings.chapter][settings.level],
          options[settings.chapter]
        );
        player.flipX = !player.flipX;
      });

      onCollideEnd("char", "exit", () => {
        puzzleText.destroy();
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
      "this is the dialogue",
      "Byte will be speaking this dialogue",
      "I'll fetch it from the database",
    ];
    let index = 0;
    const l = loop(2, () => {
      const bg = add([
        rect(500, 75),
        pos(width / 2, 100),
        anchor("center"),
        lifespan(2),
      ]);
      const dialogue = add([
        text(dialogue_options[index], { size: 20 }),
        pos(width / 2, 100),
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
  ]);
}
