"use strict";
let magician = ['Criss angel', 'Shin lim', 'Rick jay', 'Alan curtis adam'];
function make_great(magicanMagic) {
    for (let i = 0; i < magicanMagic.length; i++) {
        magician[i] = 'The Great' + magicanMagic[i];
    }
}
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
