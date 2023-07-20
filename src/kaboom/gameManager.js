import kaboom from "kaboom";
import { assetLoader } from "./assetLoader";
import { settings } from "./settings";
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
  setGravity(settings.GRAVITY);

  scene("1-1", () => {
    const background = add([sprite("1-1-bg")]);
    const groundtiles = addLevel(
      levels[0][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char"),
      pos(80, height - 118),
      scale(1.5),
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
          size: 45,
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
          size: 45,
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
  scene("1-2", () => {
    const background = add([sprite("1-2-bg")]);
    const groundtiles = addLevel(
      levels[0][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char"),
      pos(80, height - 118),
      scale(1.5),
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
          size: 45,
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
          size: 45,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        changeActivePuzzle(2);
        go("1-3");
      });
      player.onCollideEnd("arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });
  scene("1-3", () => {
    const background = add([sprite("1-3-bg")]);
    const groundtiles = addLevel(
      levels[0][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char"),
      pos(80, height - 118),
      scale(1.5),
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
          size: 45,
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
          size: 45,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level = 0;
        changeActivePuzzle(0);
        changeActiveChapter(1);
        go("2-1");
      });
      player.onCollideEnd("arrow", () => {
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
      sprite("char"),
      pos(80, height - 118),
      scale(1.5),
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
          size: 45,
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
          size: 45,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        changeActivePuzzle(1);
        go("2-2");
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
      sprite("char"),
      pos(80, height - 118),
      scale(1.5),
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
          size: 45,
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
          size: 45,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        changeActivePuzzle(2);
        go("2-3");
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
      sprite("char"),
      pos(80, height - 118),
      scale(1.5),
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
          size: 45,
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
          size: 45,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      const change = onKeyPress("e", () => {
        settings.level += 1;
        changeActivePuzzle(0);
        go();
      });
      player.onCollideEnd("arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });

  go("1-1");
}
