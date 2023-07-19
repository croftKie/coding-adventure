import kaboom from "kaboom";
import { images } from "../utils/images";

export function gameManager(gameRef, width, height, toggleUi) {
  const SPAWN_HEIGHT = [90, 0];
  const SPEED = 200;
  const GRAVITY = 800;
  kaboom({ width: width, height: height, canvas: gameRef });

  loadSprite("char_idle", "../../public/assets/overworld/idle_char.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
      idle: {
        from: 0,
        to: 2,
        speed: 2,
        loop: true,
      },
    },
  });
  loadSprite("char_run", "../../public/assets/overworld/run_char.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 5,
        speed: 10,
        loop: true,
      },
    },
  });
  loadSprite("bg", images.bgAssets[0]);
  loadSprite("cave", images.puzzleAssets[4]);
  loadSprite("building", "../../public/assets/overworld/building_01.png");

  scene("game", () => {
    setGravity(GRAVITY);
    spawnDeco();
    const player = add([
      pos(80, 40),
      scale(4),
      area({ shape: new Rect(vec2(0), 100, 100) }),
      anchor("bot"),
      body({ stickToPlatform: true }),
      {
        sprites: {
          run: `char_run`,
          idle: `char_idle`,
        },
      },
    ]);
    player.use(sprite(player.sprites.idle));

    const building = add([
      sprite("building"),
      pos(800, 290),
      area(),
      scale(3),
      "building",
    ]);

    onKeyDown("d", () => {
      right(player);
      player.use(sprite(player.sprites.run));
    });
    onKeyDown("a", () => {
      left(player);
    });
    // onClick(jump);

    player.onCollide("building", () => {
      const puzzleText = add([
        text(`Press "E" to open the next puzzle`, {
          size: 45,
        }),
        pos(width / 2, height - 50),
        anchor("center"),
      ]);

      onKeyPress("e", () => {
        toggleUi("popUp");
      });
    });
  });

  go("game");

  function left(player) {
    player.move(-SPEED, 0);
  }
  function right(player) {
    player.move(SPEED, 0);
  }

  function spawnDeco() {
    const background = add([sprite("bg")]);
    const floor = add([
      rect(width, SPAWN_HEIGHT[0]),
      outline(4),
      pos(0, height),
      anchor("botleft"),
      area(),
      body({ isStatic: true }),
      color(127, 200, 255),
    ]);
  }
}
