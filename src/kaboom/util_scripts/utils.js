export function initHUDAssets() {
  const note = add([sprite("note"), pos(20, 20), area(), scale(0.1), "note"]);
  const question = add([
    sprite("question"),
    pos(100, 20),
    area(),
    scale(0.1),
    "question",
  ]);
}

export function HUDInteractionManager() {
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
    play("click", { volume: 0.4, speed: 1.2 });
    if (!playing) {
      forestMusic.paused = false;
      playing = true;
    } else {
      forestMusic.paused = true;
    }
  });

  onHover("question", (e) => {
    e.flipX = true;
    setCursor("pointer");
  });
  onHoverEnd("question", (e) => {
    e.flipX = false;
    setCursor("default");
  });
  onClick("question", () => {
    play("click", { volume: 0.4, speed: 1.2 });
    settings.current_tutorial = 1;
    go("tut-1");
  });
}

export function invisWallCreator(size, position) {
  add([
    rect(size[0], size[1]),
    area(),
    body({ isStatic: true }),
    pos(position[0], position[1]),
    opacity(0),
  ]);
}

export function addAsset(spriteRef, scaleRef, position, tag) {
  add([
    sprite(spriteRef),
    area(),
    scale(scaleRef),
    body({ isStatic: true }),
    pos(position[0], position[1]),
    tag,
  ]);
}
