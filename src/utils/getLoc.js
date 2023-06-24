export const getLoc = (char)=>{
    const charLoc = char.current.style.transform
    .slice(char.current.style.transform.indexOf("(")+1, 
            char.current.style.transform.indexOf(")"));
    const replace_one = charLoc.replace("px,", "");
    const replace_two = replace_one.replace("px", "");
    const b = replace_two.split(" ");
    return {x : parseInt(b[0]), y : parseInt(b[1])};

}