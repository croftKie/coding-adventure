export function walkSound() {
  return play("step", {
    speed: 1.5,
    volume: 0.1,
    loop: true,
    paused: true,
  });
}

export function forestMusic() {
  return play("forest_music", {
    speed: 1,
    volume: 0.1,
    loop: true,
    paused: true,
  });
}
