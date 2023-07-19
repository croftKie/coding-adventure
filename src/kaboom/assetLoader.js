import { images } from "../utils/images";

export function assetLoader(bgNum = 0) {
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
  });

  loadSprite("bg", images.bgAssets[bgNum]);
}
