import { gsap } from "gsap";
export const animator = (imgRef, instructionInputs, height, width)=>{
    const pos = imgRef.current.style.transform.slice(imgRef.current.style.transform.indexOf('(')+1, imgRef.current.style.transform.indexOf(')')).replace('px,', '').replace('px','').split(' ');
    let X = parseInt(pos[0]);
    let Y = parseInt(pos[1]);

    let tl = gsap.timeline({repeatDelay: 1});
    tl.pause();

    const repeatIndex = instructionInputs.findIndex(el => el.type === 'repeat');
    const endIndex = instructionInputs.findIndex(el => el.type === 'end');
    const repeatable = instructionInputs.slice(repeatIndex+1, endIndex);

    for (let i = 0; i < instructionInputs.length; i++) {
        if (i === repeatIndex) {
            const repeatNum = instructionInputs[repeatIndex].value;
            let j = 0;
            while (j < repeatNum) {
                repeatable.forEach((el)=>{
                    switch (el.type) {
                        case 'forward':
                            if(Y - el.value < 0){
                                tl.to(imgRef.current, {y: 0});
                                Y = 0;
                            } else {
                                tl.to(imgRef.current, {y: Y - Math.abs(el.value)});
                                Y -= Math.abs(el.value);
                            }
                            break;
                        case 'backwards':
                            if(Y + el.value > height){
                                tl.to(imgRef.current, {y: height});
                                Y = height;
                            } else {
                                tl.to(imgRef.current, {y: Y + Math.abs(el.value)});
                                Y += Math.abs(el.value);
                            }
                            break;
                        case 'right':
                            if(X + el.value > width){
                                tl.to(imgRef.current, {x: width});
                                X = width;
                            } else {
                                tl.to(imgRef.current, {x: X + Math.abs(el.value)});
                                X += Math.abs(el.value);
                            }
                            break;
                        case 'left':
                            if(X - el.value < 0){
                                tl.to(imgRef.current, {x: 0});
                                X = 0;
                            } else {
                                tl.to(imgRef.current, {x: X - Math.abs(el.value)});
                                X -= Math.abs(el.value);
                            }
                            break;
                        default:
                            break;
                    }
                });
                j++;
            }
            i = endIndex;
        } else {
            switch (instructionInputs[i].type) {
                case 'forward':
                    if(Y - instructionInputs[i].value < 0){
                        tl.to(imgRef.current, {y: 0});
                        Y = 0;
                    } else {
                        tl.to(imgRef.current, {y: Y - Math.abs(instructionInputs[i].value)});
                        Y -= Math.abs(instructionInputs[i].value);
                    }
                    break;
                case 'backwards':
                    if(Y + instructionInputs[i].value > height){
                        tl.to(imgRef.current, {y: height});
                        Y = height;
                    } else {
                        tl.to(imgRef.current, {y: Y + Math.abs(instructionInputs[i].value)});
                        Y += Math.abs(instructionInputs[i].value);
                    }
                    break;
                case 'right':
                    if(X + instructionInputs[i].value > width){
                        tl.to(imgRef.current, {x: width});
                        X = width;
                    } else {
                        tl.to(imgRef.current, {x: X + Math.abs(instructionInputs[i].value)});
                        X += Math.abs(instructionInputs[i].value);
                    }
                    break;
                case 'left':
                    if(X - instructionInputs[i].value < 0){
                        tl.to(imgRef.current, {x: 0});
                        X = 0;
                    } else {
                        tl.to(imgRef.current, {x: X - Math.abs(instructionInputs[i].value)});
                        X -= Math.abs(instructionInputs[i].value);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    tl.resume();
    return {x: X, y: Y};
}

export const resetAnimation = (imgRef, startLocs) =>{
    gsap.to(imgRef.current, {x: startLocs[0].x, y: startLocs[0].y});
}

export const WinCondition = (char, charLocation, goalLocation)=>{
    const loc = char.current.getBoundingClientRect();
    if(charLocation.x <= (goalLocation.x + loc.width) && 
        charLocation.x >= goalLocation.x && 
        charLocation.y <= (goalLocation.y + loc.height) && 
        charLocation.y >= goalLocation.y) {
        console.log("You have won!");
    }
}