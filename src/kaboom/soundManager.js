export function walkSound() {
  return play("step", {
    speed: 1.5,
    volume: 0.1,
    loop: true,
    paused: true,
  });
}
