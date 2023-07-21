import kaboom from "kaboom";
import { assetLoader } from "./assetLoader";
import { levelIndicators, settings } from "./settings";
import { levels, levelOptions } from "./levelManager";
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

  scene("1-1", () => {
    initBackgroundAssets(levelIndicators[settings.current_scene]);
    initHUDAssets();
    HUDInteractionManager();

    const player = add([
      pos(80, height - 118),
      scale(settings.player_scale),
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
          size: settings.text_size,
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
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        if ([2, 5, 8, 11].includes(settings.current_scene)) {
          settings.level = 0;
        } else {
          settings.level += 1;
        }
        settings.current_scene += 1;
        changeActivePuzzle(settings.level);
        go(levelIndicators[settings.current_scene]);
      });
      onCollideEnd("char", "arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });
  scene("1-2", () => {
    initBackgroundAssets(levelIndicators[settings.current_scene]);
    initHUDAssets();
    HUDInteractionManager();

    const player = add([
      pos(80, height - 118),
      scale(settings.player_scale),
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
          size: settings.text_size,
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
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        if ([2, 5, 8, 11].includes(settings.current_scene)) {
          settings.level = 0;
        } else {
          settings.level += 1;
        }
        settings.current_scene += 1;
        changeActivePuzzle(settings.level);
        go(levelIndicators[settings.current_scene]);
      });
      onCollideEnd("char", "arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });
  scene("1-3", () => {
    initBackgroundAssets(levelIndicators[settings.current_scene]);
    initHUDAssets();
    HUDInteractionManager();

    const player = add([
      pos(80, height - 118),
      scale(settings.player_scale),
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
          size: settings.text_size,
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
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        if ([2, 5, 8, 11].includes(settings.current_scene)) {
          settings.level = 0;
        } else {
          settings.level += 1;
        }
        settings.current_scene += 1;
        changeActivePuzzle(settings.level);
        go(levelIndicators[settings.current_scene]);
      });
      onCollideEnd("char", "arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });

    onCollide("char", "exit", () => {
      const puzzleText = add([
        text(`Exit the chapter`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        if ([2, 5, 8, 11].includes(settings.current_scene)) {
          settings.level = 0;
          settings.level_options = 1;
        } else {
          settings.level += 1;
        }
        settings.current_scene += 1;
        changeActivePuzzle(settings.level);
        go(levelIndicators[settings.current_scene]);
      });
      onCollideEnd("char", "arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });

  scene("2-1", () => {
    const background = add([sprite("2-1-bg")]);
    console.log(settings.level);
    const groundtiles = addLevel(
      levels[1][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char_idle"),
      pos(80, height - 118),
      scale(settings.player_scale),
      area({ shape: new Rect(vec2(0), 100, 100) }),
      anchor("bot"),
      body({ stickToPlatform: true }),
      "char",
    ]);
    player.play("idle");
    movementManager(player, settings);

    player.onCollide("puzzle", () => {
      const puzzleText = add([
        text(`Press "E" to open the next puzzle`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const popup = onKeyPress("e", () => {
        toggleUi("popUp");
      });
      player.onCollideEnd("puzzle", () => {
        puzzleText.destroy();
        popup.cancel();
      });
    });

    player.onCollide("arrow", () => {
      const puzzleText = add([
        text(`Go to the next puzzle`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        changeActivePuzzle(1);
        go("1-2");
      });
      player.onCollideEnd("arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });
  scene("2-2", () => {
    const background = add([sprite("2-2-bg")]);
    const groundtiles = addLevel(
      levels[0][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char_idle"),
      pos(80, height - 118),
      scale(settings.player_scale),
      area({ shape: new Rect(vec2(0), 100, 100) }),
      anchor("bot"),
      body({ stickToPlatform: true }),
      "char",
    ]);
    player.play("idle");
    movementManager(player, settings);

    player.onCollide("puzzle", () => {
      const puzzleText = add([
        text(`Press "E" to open the next puzzle`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const popup = onKeyPress("e", () => {
        toggleUi("popUp");
      });
      player.onCollideEnd("puzzle", () => {
        puzzleText.destroy();
        popup.cancel();
      });
    });

    player.onCollide("arrow", () => {
      const puzzleText = add([
        text(`Go to the next puzzle`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        changeActivePuzzle(2);
        go("1-2");
      });
      player.onCollideEnd("arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });
  scene("2-3", () => {
    const background = add([sprite("2-3-bg")]);
    const groundtiles = addLevel(
      levels[0][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char_idle"),
      pos(80, height - 118),
      scale(settings.player_scale),
      area({ shape: new Rect(vec2(0), 100, 100) }),
      anchor("bot"),
      body({ stickToPlatform: true }),
      "char",
    ]);
    player.play("idle");
    movementManager(player, settings);

    player.onCollide("puzzle", () => {
      const puzzleText = add([
        text(`Press "E" to open the next puzzle`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const popup = onKeyPress("e", () => {
        toggleUi("popUp");
      });
      player.onCollideEnd("puzzle", () => {
        puzzleText.destroy();
        popup.cancel();
      });
    });

    player.onCollide("arrow", () => {
      const puzzleText = add([
        text(`Go to the next puzzle`, {
          size: settings.text_size,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level = 0;
        changeActivePuzzle(0);
        go("1-2");
      });
      player.onCollideEnd("arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });

  go("1-1");
}

// Initialisation Functions
// Calling these sets up the background assets and initial settings
// Refer above for preferred call point

function initBackgroundAssets(bg) {
  const background = add([sprite(bg)]);
  const groundtiles = addLevel(
    levels[0][settings.level],
    levelOptions[settings.level_options]
  );
}

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
