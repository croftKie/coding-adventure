import { gsap } from "gsap";

// restores current animation path to default values
export const resetAnimationPath = (element, elementStartLocation) => {
  gsap.to(element, { x: elementStartLocation.x, y: elementStartLocation.y });
};

// returns boolean if GSAP timeline has completed and element has reached specified location
export const isPathComplete = (element, elementLocation, endLocation) => {
  console.log(element, elementLocation, endLocation);
  const size = element.getBoundingClientRect();
  if (
    elementLocation.x <= endLocation.x + size.width &&
    elementLocation.x >= endLocation.x &&
    elementLocation.y <= endLocation.y + size.height &&
    elementLocation.y >= endLocation.y
  ) {
    return true;
  } else {
    return false;
  }
};

// animator logic to seperate single inputs and repeatable inputs
export const animator = (
  element,
  inputs,
  parentHeight,
  parentWidth,
  obstacles = [],
  onComplete
) => {
  let X = _getPosition(element).X;
  let Y = _getPosition(element).Y;
  const tl = _initTimeline(onComplete);
  const { repeatStartIndex, repeatEndIndex, repeatableInputs, repeatNumber } =
    _utils(inputs);
  for (let i = 0; i < inputs.length; i++) {
    if (i === repeatStartIndex) {
      let j = 0;
      while (j < repeatNumber) {
        repeatableInputs.forEach((el) => {
          _animatePath(
            element,
            el.type,
            el,
            tl,
            parentHeight,
            parentWidth,
            X,
            Y
          );
        });
        j++;
      }
      i = repeatEndIndex;
    } else {
      const value = _animatePath(
        element,
        inputs[i].type,
        inputs[i],
        tl,
        parentHeight,
        parentWidth,
        X,
        Y
      );
      if (Object.keys(value)[0] === "X") {
        X = value.X;
      } else if (Object.keys(value)[0] === "Y") {
        Y = value.Y;
      }
    }
  }

  let obstacleHit = false;
  tl.getChildren().forEach((anim) => {
    if (obstacles.length > 0) {
      if (obstacleHit) {
        tl.remove(anim);
      } else {
        for (let i = 0; i < obstacles[0].length; i++) {
          if (
            anim.vars.y === obstacles[0][i].startLocation[0].y &&
            anim.vars.x === obstacles[0][i].startLocation[0].x
          ) {
            console.log("hit obstacle");
            obstacleHit = true;
          }
        }
      }
    }
  });

  // _animatePathWithObstacle(obstacleHit, tl, obstacles);
  tl.resume();
  return { x: X, y: Y, hitStatus: obstacleHit };
};

// adds each input to the timeline
const _animatePath = (
  element,
  type,
  el,
  tl,
  height,
  width,
  startingX,
  startingY
) => {
  let X = startingX;
  let Y = startingY;
  switch (type) {
    case "forward":
      if (Y - el.value < 0) {
        tl.to(element, { y: 0 });
        Y = 0;
      } else {
        tl.to(element, { y: Y - Math.abs(el.value) });
        Y -= Math.abs(el.value);
      }
      return { Y: Y };
    case "backwards":
      if (Y + el.value > height) {
        tl.to(element, { y: height });
        Y = height;
      } else {
        tl.to(element, { y: Y + Math.abs(el.value) });
        Y += Math.abs(el.value);
      }
      return { Y: Y };
    case "right":
      console.log(width, element.clientWidth);
      width -= element.clientWidth;
      if (X + el.value > width) {
        console.log("running");
        tl.to(element, { x: width });
        X = width;
      } else {
        tl.to(element, { x: X + Math.abs(el.value) });
        X += Math.abs(el.value);
      }
      return { X: X };
    case "left":
      if (X - el.value < 0) {
        tl.to(element, { x: 0 });
        X = 0;
      } else {
        tl.to(element, { x: X - Math.abs(el.value) });
        X -= Math.abs(el.value);
      }
      return { X: X };
    default:
      break;
  }
};

// new obstacle collision manager
const _animatePathWithObstacles = (obstacleHit, tl, obstacles) => {
  tl.getChildren().forEach((anim) => {
    if (obstacles.length > 0) {
      if (obstacleHit) {
        tl.remove(anim);
      } else {
        for (let i = 0; i < obstacles[0].length; i++) {
          if (
            anim.vars.y === obstacles[0][i].startLocation[0].y &&
            anim.vars.x === obstacles[0][i].startLocation[0].x
          ) {
            console.log("hit obstacle");
            obstacleHit = true;
          }
        }
      }
    }
  });
};

// returns the active position of the element - performs string manipulation
const _getPosition = (element) => {
  const pos = element.style.transform
    .slice(
      element.style.transform.indexOf("(") + 1,
      element.style.transform.indexOf(")")
    )
    .replace("px,", "")
    .replace("px", "")
    .split(" ");
  let X = parseInt(pos[0]);
  let Y = parseInt(pos[1]);
  return { X: parseInt(pos[0]), Y: parseInt(pos[1]) };
};

// Creates a initial GSAP timeline and pauses for population
const _initTimeline = (onComplete) => {
  let tl = gsap.timeline({ onComplete: onComplete, repeatDelay: 1 });
  tl.pause();
  return tl;
};

// utility manager for repeatable inputs
const _utils = (inputs) => {
  const repeatStartIndex = inputs.findIndex((el) => el.type === "repeat");
  const repeatEndIndex = inputs.findIndex((el) => el.type === "end");
  const repeatableInputs = inputs.slice(repeatStartIndex + 1, repeatEndIndex);
  let repeatNumber;
  if (repeatStartIndex !== -1) {
    repeatNumber = inputs[repeatStartIndex].value;
  } else {
    repeatNumber = null;
  }

  return {
    repeatStartIndex: repeatStartIndex,
    repeatEndIndex: repeatEndIndex,
    repeatableInputs: repeatableInputs,
    repeatNumber: repeatNumber,
  };
};
