"use strict"; 
const typeGoods = "food"; 


console.log(`https://markett.com/${typeGoods}`)

const arrFunc = () => { 
    console.log("Hello")
    console.log(Math.PI)    
}
arrFunc() 


// main func 
function Movement(PlayerName, action) { 
    console.log(PlayerName); 
    action(); 
}

function sayHi() {
    console.log("Hey!!!") 
}

Movement("Mike", sayHi)