"use strict";
// store the number 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) { //loop through the array.
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "ts";
    }
    else if (num === 2) {
        ordinalEnding = "th";
    }
    else if (num === 3) {
        ordinalEnding = "sc";
    }
    else {
        ordinalEnding = "mt";
    }
    console.log(`${num}${ordinalEnding}`);
}
