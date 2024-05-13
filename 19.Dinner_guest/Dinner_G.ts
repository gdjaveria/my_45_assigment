let guest_list :string[] = ['Hoorain','Anabia','Rabia'];

let absent_guest :string = 'Rabia' ;

let new_guest :string = 'Zarnab' ;

guest_list[0] = new_guest ;


console.log(`${absent_guest} is not coming to office party.`);
console.log(`Good news, we find big table so we are inviting 3 more guests.`)
// 3 guest add in array..
guest_list.unshift('Kamran Tessori');
guest_list.splice(2 , 0 , 'sir zia khan');
guest_list.push('Daniyal Nagori');

//   for(let i=0; i<guest_list.length; i++){
  //  console.log('Dear Mrs.  ' + guest_list[i] +',\n\nit is our pleasure to invite you to celebrate our teams achievements with an office party get together.\n\nThank you!')
    //}
 // sorry message to guest for not inviting..

//   console.log('\nsorry we can not arrange big table,only two people will be invited.');
while(guest_list.length > 2){
    let remove_guest = guest_list.pop()
    // console.log(`soory Mr. ${remove_guest} you are not invited for dinner.`);
}

//for(let i=0; i<guest_list.length; i++){
 //   console.log('Dear Mrs.  ' + guest_list[i] +',\n\nyou are still invited.\n\nThank you!\n\n')
    //}
     guest_list.splice(0,2);
console.log(guest_list);

// print a message indicating the number of people you are inviting to dinner.

console.log (`Total number of guest: ${guest_list.length}`);