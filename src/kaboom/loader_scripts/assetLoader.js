import { images } from "../../utils/images";
import { sounds } from "../../utils/sounds";

export function assetLoader() {
  loadSprite("byte", images.puzzleAssets.byte_right);

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
    grass_lower: {
      x: 128,
      y: 0,
      width: 128,
      height: 128,
    },
    stone: {
      x: 256,
      y: 640,
      width: 128,
      height: 128,
    },
    stone_lower: {
      x: 384,
      y: 512,
      width: 128,
      height: 128,
    },
    snow: {
      x: 384,
      y: 896,
      width: 128,
      height: 128,
    },
    snow_lower: {
      x: 512,
      y: 768,
      width: 128,
      height: 128,
    },
    sand: {
      x: 512,
      y: 1152,
      width: 128,
      height: 128,
    },
    sand_lower: {
      x: 640,
      y: 1024,
      width: 128,
      height: 128,
    },
  });
  loadSpriteAtlas(images.overworld.items.items_ss, {
    key: {
      x: 384,
      y: 256,
      width: 128,
      height: 128,
    },
    star: {
      x: 384,
      y: 128,
      width: 128,
      height: 128,
    },
  });
  loadSpriteAtlas(images.overworld.items.decorations_ss, {
    puzzle: {
      x: 256,
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

  loadSprite("a_1", images.overworld.bgAssets.a_1);
  loadSprite("a_2", images.overworld.bgAssets.a_2);
  loadSprite("a_3", images.overworld.bgAssets.a_3);

  loadSprite("w_1", images.overworld.bgAssets.w_1);
  loadSprite("w_2", images.overworld.bgAssets.w_2);
  loadSprite("w_3", images.overworld.bgAssets.w_3);

  loadSprite("sg_1", images.overworld.bgAssets.sg_1);
  loadSprite("sg_2", images.overworld.bgAssets.sg_2);
  loadSprite("sg_3", images.overworld.bgAssets.sg_3);

  loadSprite("sm_1", images.overworld.bgAssets.sm_1);
  loadSprite("sm_2", images.overworld.bgAssets.sm_2);
  loadSprite("sm_3", images.overworld.bgAssets.sm_3);

  loadSprite("a_1_l", images.overworld.levels[0]);
  loadSprite("a_2_l", images.overworld.levels[1]);
  loadSprite("a_3_l", images.overworld.levels[2]);

  loadSprite("w_1_l", images.overworld.levels[3]);
  loadSprite("w_2_l", images.overworld.levels[4]);
  loadSprite("w_3_l", images.overworld.levels[5]);

  loadSprite("sg_1_l", images.overworld.levels[6]);
  loadSprite("sg_2_l", images.overworld.levels[7]);
  loadSprite("sg_3_l", images.overworld.levels[8]);

  loadSprite("sm_1_l", images.overworld.levels[9]);
  loadSprite("sm_2_l", images.overworld.levels[10]);
  loadSprite("sm_3_l", images.overworld.levels[11]);

  loadSprite("tut-1", images.overworld.tutorialAssets.tut_1);
  loadSprite("tut-2", images.overworld.tutorialAssets.tut_2);
  loadSprite("tut-3", images.overworld.tutorialAssets.tut_3);
  loadSprite("tut-4", images.overworld.tutorialAssets.tut_4);

  loadSprite("note", images.overworld.ui.music_note);
  loadSprite("question", images.overworld.ui.help_button);
  loadSprite("button", images.overworld.ui.button);
  loadSprite("next", images.overworld.ui.next);
  loadSprite("previous", images.overworld.ui.previous);
  loadSprite("close", images.overworld.ui.close);
}
//sounds loader
export function soundLoader() {
  loadSound("step", sounds.walk);
  loadSound("forest_music", sounds.forest_music);
  loadSound("click", sounds.click);
}
