import { walkSound } from "./soundManager";

export function movementManager(player, settings) {
  const walk = walkSound();
  onKeyDown("d", () => {
    player.move(settings.SPEED, 0);
  });
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
  onKeyDown("a", () => {
    player.move(-settings.SPEED, 0);
    player.flipX = true;
  });
  onKeyPress("a", () => {
    player.use(sprite("char_walk"));
    player.play("walk");
    player.flipX = true;
    walk.paused = false;
  });
  onKeyRelease("a", () => {
    player.use(sprite("char_idle"));
    player.play("idle");
    walk.paused = true;
  });
}
