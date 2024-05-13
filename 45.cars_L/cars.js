"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storecarInfo(manufacturer, carModel, ...extraoption) {
    const carInfo = Object.assign({ manufacturer,
        carModel }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let answer = storecarInfo('Honda', 'Civic', { color: 'White' }, { features: ['power window', 'navigation'] });
console.log(answer);
