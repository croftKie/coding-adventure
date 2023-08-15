export function movementManager(player, settings, walk) {
  onKeyDown("d", () => {
    player.move(settings.SPEED, 0);
    if (!player.isGrounded()) {
      player.use(sprite("char_idle"));
      player.play("idle");
    }
  });
  onKeyDown("a", () => {
    player.move(-settings.SPEED, 0);
  });
  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(800);
      walk.paused = true;
      player.onGround(() => {
        if (isKeyDown("d") || isKeyDown("a")) {
          player.use(sprite("char_walk"));
          player.play("walk");
          walk.paused = false;
          if (isKeyDown("a")) {
            player.flipX = true;
          }
        }
      });
    }
  });
}

export function animManager(player, settings, walk) {
  onKeyPress("d", () => {
    player.use(sprite("char_walk"));
    player.play("walk");
    player.flipX = false;
    walk.paused = false;
  });
  onKeyRelease("d", () => {
    player.use(sprite("char_idle"));
    player.play("idle");
    walk.paused = true;
  });
  onKeyPress("a", () => {
    if (player.isGrounded()) {
      player.use(sprite("char_walk"));
      player.play("walk");
      player.flipX = true;
      walk.paused = false;
    }
  });
  onKeyRelease("a", () => {
    player.use(sprite("char_idle"));
    player.play("idle");
    player.flipX = true;
    walk.paused = true;
  });
}
