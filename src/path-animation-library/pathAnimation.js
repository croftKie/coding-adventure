import { gsap } from "gsap";

export const resetAnimationPath = (element, elementStartLocation) => {
  gsap.to(element, { x: elementStartLocation.x, y: elementStartLocation.y });
};

export const isPathComplete = (element, elementLocation, endLocation) => {
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

export const animator = (
  element,
  inputs,
  parentHeight,
  parentWidth,
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
  tl.resume();
  return { x: X, y: Y };
};

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
      if (X + el.value > width) {
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

const _initTimeline = (onComplete) => {
  let tl = gsap.timeline({ onComplete: onComplete, repeatDelay: 1 });
  tl.pause();
  return tl;
};

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

export const timelineComplete = async () => {
  console.log("hello");
};
