let guest_list :string[] = ['Hoorain','Anabia','Rabia'];

let absent_guest :string = 'Rabia' ;

let new_guest :string = 'Zarnab' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mrs.  ' + guest_list[i] +',\n\nit is our pleasure to invite you to celebrate our teams achievements with an office party get together.\n\nThank you!')
    
}

console.log(`${absent_guest} is not coming to office party.`);

console.log(`Good news, we find big table so we are inviting 3 more guests.`)

guest_list.unshift('Kamran Tessori');
guest_list.splice(2 , 0 , 'sir zia khan');
guest_list.push('Daniyal Nagori');

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mrs.  ' + guest_list[i] +',\n\nit is our pleasure to invite you to celebrate our teams achievements with an office party get together.\n\nThank you!')
    
}
