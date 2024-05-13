"use strict";
function makeSandwitches(item) {
    console.log('Make your sandwich with!');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwich !');
}
makeSandwitches(['chesse', 'mayo garlic', 'lettuce']);
makeSandwitches(['grilled chesse', 'steak ']);
makeSandwitches(['habnearo', 'beef']);
