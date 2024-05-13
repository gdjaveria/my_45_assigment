//store the location in aarray.make sure the array is not alphabetical order.
let places: string[]=['Nigara falls','Hamnoy','Hunza valley'];
console.log('original' + places );    

//print your array in alphabetical order without modifying the actual list.
console.log('copy' + [...places].sort());
console.log('original'+ places );   // show that your array is still its original order by printing it.

// print your array in reverse alaphabetical order without changing the order of original list.
console.log('copy' + [...places].sort().reverse());
console.log('original'+ places);             // still in its original order by printing it again
console.log('original'+ places.reverse());         // reverse the order & order has changed.

console.log('original'+ places.reverse());  // reverse the order of your list again print & its show in its original order.
console.log('original'+ places.sort());     // stored in alphabetical error prin thr array to show its order its changed.
// changed your array so its store in reverse alphabetical order print and  to show that its order its changed.
 console.log('original'+ places.sort().reverse());






