import kaboom from "kaboom";
import { assetLoader } from "./assetLoader";
import { settings } from "./settings";
import { levels, levelOptions } from "./levelManager";

export function gameManager(
  gameRef,
  width,
  height,
  toggleUi,
  changeActivePuzzle
) {
  kaboom({ width: width, height: height, canvas: gameRef });

  scene("game", () => {
    assetLoader(settings.bg);
    setGravity(settings.GRAVITY);
    spawnDeco();
    const groundtiles = addLevel(
      levels[0][settings.level],
      levelOptions[settings.level]
    );

    const player = add([
      sprite("char"),
      pos(80, 40),
      scale(1.5),
      area({ shape: new Rect(vec2(0), 100, 100) }),
      anchor("bot"),
      body({ stickToPlatform: true }),
      "char",
    ]);
    player.play("idle");

    onKeyDown("d", () => {
      right(player);
      player.play("run");
    });
    onKeyDown("a", () => {
      left(player);
    });

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
        settings.bg += 1;
        changeActivePuzzle();
      });
      player.onCollideEnd("arrow", () => {
        puzzleText.destroy();
        change.cancel();
      });
    });
  });

  go("game");

  function left(player) {
    player.move(-settings.SPEED, 0);
  }
  function right(player) {
    player.move(settings.SPEED, 0);
  }

  function spawnDeco() {
    const background = add([sprite("bg")]);
  }
}
