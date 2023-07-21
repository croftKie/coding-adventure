import { images } from "../utils/images";

export function assetLoader() {
  loadSprite(
    "char_idle",
    "../../public/assets/overworld/player/theboy_idle.png",
    {
      sliceX: 8,
      sliceY: 5,
      anims: {
        idle: {
          from: 0,
          to: 36,
          speed: 36,
          loop: true,
        },
      },
    }
  );
  loadSprite(
    "char_walk",
    "../../public/assets/overworld/player/theboy_walk.png",
    {
      sliceX: 8,
      sliceY: 5,
      anims: {
        walk: {
          from: 0,
          to: 36,
          speed: 72,
          loop: true,
        },
      },
    }
  );
  loadSprite(
    "char_jump",
    "../../public/assets/overworld/player/theboy_jump.png",
    {
      sliceX: 8,
      sliceY: 5,
      anims: {
        jump: {
          from: 2,
          to: 17,
          speed: 36,
        },
      },
    }
  );
  loadSprite("grass", "../../public/assets/overworld/ground/grass.png");
  loadSprite("sand", "../../public/assets/overworld/ground/sand.png");
  loadSprite("stone", "../../public/assets/overworld/ground/stone.png");
  loadSprite("snow", "../../public/assets/overworld/ground/snow.png");

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

  loadSprite("1-0", images.bgAssets[0]);
  loadSprite("1-1", images.bgAssets[1]);
  loadSprite("1-2", images.bgAssets[2]);

  loadSprite("2-1", images.bgAssets[3]);
  loadSprite("2-2", images.bgAssets[4]);
  loadSprite("2-3", images.bgAssets[5]);

  loadSprite("3-1", images.bgAssets[6]);
  loadSprite("3-2", images.bgAssets[7]);
  loadSprite("3-3", images.bgAssets[8]);

  loadSprite("4-1", images.bgAssets[9]);
  loadSprite("4-2", images.bgAssets[10]);
  loadSprite("4-3", images.bgAssets[11]);

  loadSprite("tut-1", images.tutorialAssets[0]);
  loadSprite("tut-2", images.tutorialAssets[1]);
  loadSprite("tut-3", images.tutorialAssets[2]);
  loadSprite("tut-4", images.tutorialAssets[3]);

  loadSprite("note", "../../public/assets/overworld/ui/music.png");
}

export function soundLoader() {
  loadSound("step", "../../public/assets/overworld/sfx/footstep_grass_000.ogg");
  loadSound(
    "forest_music",
    "../../public/assets/overworld/sfx/ForestWalk-320bit.mp3"
  );
}
