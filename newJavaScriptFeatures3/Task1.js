"use strict"; 

const log = (a, b, ...other) => { 
    console.log(a); 
    console.log(b); 
    console.log(...other)
}
log("a", "b", "c", "d", "e")


function multipleOrDouble(first, second = 2 ) {
    return first * second
}

console.log(multipleOrDouble(5))