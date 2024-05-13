let alienColor : string = "green";

// if the alien is green, print meesge player earned a 5 points.
// if the alien is yellow, print meesge player earned a 10 points.
// if the alien is red, print meesge player earned a 15 points.

// version 1 
if(alienColor === "green"){
    console.log("version 1 : player earned 5 points.");
} else if(alienColor === "yellow"){
    console.log(" player earned 10 points.");
} else if(alienColor === "red"){
    console.log("player earned 15 points.");
} 
else{
    console.log("please choose a right color!");
}
//version 2 of the program.
alienColor = "yellow";

if(alienColor === "green"){
    console.log("player earned 5 points.");
} else if(alienColor === "yellow"){
    console.log("version 2 : player earned 10 points.");
} else if(alienColor === "red"){
    console.log("player earned 15 points.");
} 
else{
    console.log("please choose a right color!");
}
//version 3 of the program.
alienColor = "red";

if(alienColor === "green"){
    console.log("player earned 5 points.");
} else if(alienColor === "yellow"){
    console.log(" player earned 10 points.");
} else if(alienColor === "red"){
    console.log("version 3 : player earned 15 points.");
} 
else{
    console.log("please choose a right color!");
}