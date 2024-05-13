// store the number 1 through 9 in a array.
let numbers : number[] = [1,2,3,4,5,6,7,8,9];

//loop through the array.
for(let num of numbers){               
    let ordinalEnding: string;

// Use an if-else chain inside the loop to print the proper ordinal ending for
// each number.

    if(num === 1){
        ordinalEnding = "ts"
    } else if (num === 2){
        ordinalEnding = "th"
    }else if (num === 3){
        ordinalEnding = "sc"
    }else{
        ordinalEnding = "mt"
    }
    console.log(`${num}${ordinalEnding}`);

}