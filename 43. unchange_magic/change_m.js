"use strict";
let magician = ['Criss angel', 'Shin lim', 'Rick jay', 'Alan curtis adam'];
function copyArray(rrs) {
    return [...rrs];
}
function make_great(magicanMagic) {
    for (let i = 0; i < magicanMagic.length; i++) {
        magicanMagic[i] = 'The Great' + magicanMagic[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
const changeMagicianarray = copyArray(magician);
make_great(changeMagicianarray);
console.log('\n\nThis is my Original array...');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array....');
show_magicians(changeMagicianarray);
