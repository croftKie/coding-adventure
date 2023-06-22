import { gsap } from "gsap";
export const onClickAnim = (imgRef, instructionInputs)=>{
    let currentY = 0;
    let currentX = 0;
    let tl = gsap.timeline({repeatDelay: 1});
    tl.pause();

    const repeatIndex = instructionInputs.findIndex(el => el.type === 'repeat');
    const endIndex = instructionInputs.findIndex(el => el.type === 'end');
    const repeatable = instructionInputs.slice(repeatIndex+1, endIndex)

    for (let i = 0; i < instructionInputs.length; i++) {
        if (i === repeatIndex) {
            const repeatNum = instructionInputs[repeatIndex].value;
            let j = 0;
            while (j < repeatNum) {
                repeatable.forEach((el)=>{
                    switch (el.type) {
                        case 'forward':
                            tl.to(imgRef.current, {y: currentY - parseInt(el.value)})
                            currentY = currentY - parseInt(el.value);
                            break;
                        case 'backwards':
                            tl.to(imgRef.current, {y: parseInt(el.value)})
                            currentY = currentY + parseInt(el.value);
                            break;
                        case 'right':
                            tl.to(imgRef.current, {x: parseInt(el.value)})
                            currentX = currentX + parseInt(el.value);
                            break;
                        case 'left':
                            tl.to(imgRef.current, {x: currentX - parseInt(el.value)})
                            currentX = currentX - parseInt(el.value);
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
                    tl.to(imgRef.current, {y: currentY - instructionInputs[i].value})
                    currentY = currentY - instructionInputs[i].value;
                    break;
                case 'backwards':
                    tl.to(imgRef.current, {y: instructionInputs[i].value})
                    currentY = currentY + instructionInputs[i].value;
                    break;
                case 'right':
                    tl.to(imgRef.current, {x: instructionInputs[i].value})
                    currentX = currentX + instructionInputs[i].value;
                    break;
                case 'left':
                    tl.to(imgRef.current, {x: currentX - instructionInputs[i].value})
                    currentX = currentX - instructionInputs[i].value;
                    break;
                default:
                    break;
            }
        }
    }
    tl.resume();
}