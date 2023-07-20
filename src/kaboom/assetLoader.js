import { images } from "../utils/images";

export function assetLoader() {
  loadSprite("char", "../../public/assets/overworld/player_tilesheet.png", {
    sliceX: 9,
    sliceY: 3,
    anims: {
      idle: {
        from: 0,
        to: 0,
        speed: 2,
      },
      run: {
        from: 9,
        to: 10,
        speed: 4,
        loop: true,
      },
      cheer: {
        from: 7,
        to: 8,
        speed: 4,
      },
    },
  });
  loadSprite("autumnGround", "../../public/assets/overworld/ground/grass.png");
  loadSprite(
    "autumnGroundCenter",
    "../../public/assets/overworld/ground/grassCenter.png"
  );

  loadSpriteAtlas("../../public/assets/overworld/spritesheet_tiles.png", {
    puzzle: {
      x: 0,
      y: 1152,
      width: 128,
      height: 128,
    },
    arrow: {
      x: 256,
      y: 128,
      width: 128,
      height: 128,
    },
    exit: {
      x: 512,
      y: 896,
      width: 128,
      height: 128,
    },
  });

  loadSprite("1-1-bg", images.bgAssets[0]);
  loadSprite("1-2-bg", images.bgAssets[1]);
  loadSprite("1-3-bg", images.bgAssets[2]);

  loadSprite("2-1-bg", images.bgAssets[3]);
  loadSprite("2-2-bg", images.bgAssets[4]);
  loadSprite("2-3-bg", images.bgAssets[5]);

  loadSprite("3-1-bg", images.bgAssets[6]);
  loadSprite("3-2-bg", images.bgAssets[7]);
  loadSprite("3-3-bg", images.bgAssets[8]);

  loadSprite("4-1-bg", images.bgAssets[9]);
  loadSprite("4-2-bg", images.bgAssets[10]);
  loadSprite("4-3-bg", images.bgAssets[11]);
}

export function soundLoader() {
  loadSound("step", "../../public/assets/overworld/sfx/footstep_grass_000.ogg");
}
