import { images } from "../utils/images";

export function assetLoader() {
  loadSprite("char_idle", images.overworld.char_assets.char_idle, {
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
  });
  loadSprite("char_walk", images.overworld.char_assets.char_walk, {
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
  });
  loadSprite("char_jump", images.overworld.char_assets.char_jump, {
    sliceX: 8,
    sliceY: 5,
    anims: {
      jump: {
        from: 0,
        to: 36,
        speed: 72,
      },
    },
  });

  loadSpriteAtlas(images.overworld.ground.ground_ss, {
    grass: {
      x: 0,
      y: 128,
      width: 128,
      height: 128,
    },
    stone: {
      x: 256,
      y: 640,
      width: 128,
      height: 128,
    },
    snow: {
      x: 384,
      y: 896,
      width: 128,
      height: 128,
    },
    sand: {
      x: 512,
      y: 1152,
      width: 128,
      height: 128,
    },
  });
  loadSpriteAtlas(images.overworld.items.items_ss, {
    flag: {
      x: 0,
      y: 128,
      width: 128,
      height: 128,
    },
  });
  loadSpriteAtlas(images.overworld.items.decorations_ss, {
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

  loadSprite("1-0", images.overworld.bgAssets.a_1);
  loadSprite("1-1", images.overworld.bgAssets.a_2);
  loadSprite("1-2", images.overworld.bgAssets.a_3);

  loadSprite("2-1", images.overworld.bgAssets.w_1);
  loadSprite("2-2", images.overworld.bgAssets.w_2);
  loadSprite("2-3", images.overworld.bgAssets.w_3);

  loadSprite("3-1", images.overworld.bgAssets.sg_1);
  loadSprite("3-2", images.overworld.bgAssets.sg_2);
  loadSprite("3-3", images.overworld.bgAssets.sg_3);

  loadSprite("4-1", images.overworld.bgAssets.sm_1);
  loadSprite("4-2", images.overworld.bgAssets.sm_2);
  loadSprite("4-3", images.overworld.bgAssets.sm_3);

  loadSprite("tut-1", images.overworld.tutorialAssets.tut_1);
  loadSprite("tut-2", images.overworld.tutorialAssets.tut_2);
  loadSprite("tut-3", images.overworld.tutorialAssets.tut_3);
  loadSprite("tut-4", images.overworld.tutorialAssets.tut_4);

  loadSprite("note", images.overworld.ui.music_note);
  loadSprite("question", images.overworld.ui.help_button);
  loadSprite("button", images.overworld.ui.button);
}

export function soundLoader() {
  loadSound("step", "../../public/assets/overworld/sfx/footstep_grass_000.ogg");
  loadSound(
    "forest_music",
    "../../public/assets/overworld/sfx/ForestWalk-320bit.mp3"
  );
  loadSound("click", "../../public/assets/overworld/sfx/click_003.ogg");
}
