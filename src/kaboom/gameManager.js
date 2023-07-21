import kaboom from "kaboom";
import { assetLoader } from "./assetLoader";
import { settings } from "./settings";
import { levels, options } from "./levelManager";
import { soundLoader } from "./assetLoader";
import { movementManager } from "./movementManager";

export function gameManager(
  gameRef,
  width,
  height,
  toggleUi,
  changeActivePuzzle,
  changeActiveChapter
) {
  kaboom({ width: width, height: height, canvas: gameRef });
  soundLoader();
  assetLoader();
  initSettings();

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
      rect(width - 40, height - 40),
      anchor("center"),
      outline(4),
      area(),
    ]);
    const tutorialScreen = add([
      sprite(`tut-${settings.current_tutorial}`),
      scale(0.7),
      pos(100, height / 2),
      anchor("left"),
    ]);

    if (settings.current_tutorial > 1) {
      const backButton = add([
        pos(width - 300, 200),
        rect(250, 75),
        anchor("right"),
        outline(4),
        area(),
        "back",
      ]);

      const backButtonText = add([
        text("GO BACK"),
        pos(width - 300, 200),
        anchor("right"),
        color(1, 0, 0),
      ]);

      backButton.onClick(() => {
        current_tutorial -= 1;
        tutorialScreen.use(sprite(`tut-${current_tutorial}`));
        go("tut-1");
      });
    }

    if (settings.current_tutorial < 4) {
      const forwardButton = add([
        pos(width - 300, 500),
        rect(250, 75),
        anchor("right"),
        outline(4),
        area(),
        "forward",
      ]);

      const forwardButtonText = add([
        text("NEXT"),
        pos(width - 300, 500),
        anchor("right"),
        color(1, 0, 0),
      ]);

      forwardButton.onClick(() => {
        settings.current_tutorial += 1;
        sprite(`tut-${settings.current_tutorial}`), go("tut-1");
      });
    }

    if (settings.current_tutorial === 4) {
      const exitButton = add([
        pos(width - 300, 500),
        rect(250, 75),
        anchor("right"),
        outline(4),
        area(),
        "forward",
      ]);

      const exitButtonText = add([
        text("End Tutorial"),
        pos(width - 300, 500),
        anchor("right"),
        color(1, 0, 0),
      ]);

      exitButton.onClick(() => {
        go("1-1");
      });
    }
  });

  scene("1-1", () => {
    let groundtiles;

    const background = add([
      sprite(settings.bgRef[settings.chapter][settings.level]),
    ]);

    groundtiles = addLevel(
      levels[settings.chapter][settings.level],
      options[settings.chapter]
    );
    // left invis
    add([rect(16, 2000), area(), body({ isStatic: true }), pos(-20, 0)]);
    // right invis
    add([rect(16, 2000), area(), body({ isStatic: true }), pos(width, 0)]);

    initHUDAssets();
    HUDInteractionManager();

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
    movementManager(player, settings);

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
        puzzleText.destroy();
        popup.cancel();
      });
    });

    onCollide("char", "arrow", () => {
      const puzzleText = add([
        text(`Go to the next puzzle`, {
          size: settings.TEXT_SIZE,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        settings.bg += 1;
        changeActivePuzzle(settings.level);
        background.use(
          sprite(settings.bgRef[settings.chapter][settings.level])
        );
        groundtiles.destroy();
        groundtiles = addLevel(
          levels[settings.chapter][settings.level],
          options[settings.level_options]
        );
        player.flipX = !player.flipX;
      });
      onCollideEnd("char", "arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
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
        if (settings.level === 2) {
          settings.level = 0;
        } else {
          settings.level += 1;
        }
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
  });

  go("tut-1");
}

// Initialisation Functions
// Calling these sets up the background assets and initial settings
// Refer above for preferred call point

function initSettings() {
  setGravity(settings.GRAVITY);
}

function initHUDAssets() {
  return add([sprite("note"), pos(20, 20), area(), scale(0.1), "note"]);
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
    if (!playing) {
      forestMusic.paused = false;
      playing = true;
    } else {
      forestMusic.paused = true;
    }
  });
}
