import React from "react";
import kaboom from "kaboom";
import { useRef } from "react";
import { images } from "../../../utils/images";
import { useLayoutEffect } from "react";

const Egg = () => {
  const canvasRef = useRef();

  useLayoutEffect(() => {
    egg(canvasRef.current);
  }, []);

  return (
    <div className="eggContainer">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Egg;

function egg(ref) {
  const SPAWN_HEIGHT = [48, 0];
  const JUMP = 600;
  const SPEED = 200;
  const GRAVITY = 800;

  kaboom({ width: 600, height: 600, canvas: ref });

  loadSprite("beetle", images.eggAssets[0], {
    sliceX: 4,
    sliceY: 1,
    anims: {
      move: {
        from: 0,
        to: 3,
        speed: 8,
        loop: true,
      },
    },
  });
  loadSprite("byte", images.eggAssets[1]);
  loadSprite("bg", images.eggAssets[2]);

  scene("game", () => {
    setGravity(GRAVITY);
    spawnDeco();
    const player = add([
      sprite("byte"),
      pos(80, 40),
      area(),
      body(),
      scale(0.2),
    ]);

    onKeyPress("space", () => {
      jump(player, JUMP);
    });
    onKeyDown("d", () => {
      right(player);
    });
    onKeyDown("a", () => {
      left(player);
    });
    onClick(jump);

    spawnBug(SPAWN_HEIGHT);

    let score = 0;
    const scoreLabel = add([text(score), pos(24, 24)]);

    // increment score every frame
    onUpdate(() => {
      score++;
      scoreLabel.text = score;
    });

    player.onCollide("bug", () => {
      go("lose", score);
    });
  });

  scene("lose", (score) => {
    spawnDeco();
    add([
      sprite("byte"),
      pos(width() / 2, height() / 2 - 80),
      scale(0.2),
      anchor("center"),
    ]);

    add([
      text(score),
      pos(width() / 2, height() / 2 + 80),
      scale(1),
      anchor("center"),
    ]);

    onKeyPress("space", () => go("game"));
    onClick(() => go("game"));
  });

  go("game");

  function jump(player, JUMP) {
    if (player.isGrounded()) {
      player.jump(JUMP);
    }
  }
  function left(player) {
    player.move(-SPEED, 0);
  }
  function right(player) {
    player.move(SPEED, 0);
  }

  function spawnBug(SPAWN_HEIGHT) {
    const bug = add([
      sprite("beetle"),
      area(),
      scale(2),
      pos(width(), height() - SPAWN_HEIGHT[0]),
      anchor("bot"),
      color(255, 180, 255),
      move(LEFT, SPEED),
      "bug",
    ]);
    bug.play("move");
    wait(rand(1.5, 2.5), () => {
      spawnBug(SPAWN_HEIGHT);
    });
  }

  function spawnDeco() {
    const background = add([sprite("bg"), scale(0.55)]);
    const floor = add([
      rect(width(), SPAWN_HEIGHT[0]),
      outline(4),
      pos(0, height()),
      anchor("botleft"),
      area(),
      body({ isStatic: true }),
      color(127, 200, 255),
    ]);
  }
}
