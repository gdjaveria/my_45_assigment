// Make a list of five or more usernames called current_users.
let current_users:string[] = ['SaNa','ZaRnab','AhMed', 'Zaviyar','Farah'];

//make another list of new_users.make sure one or two of the new username are also in 
//the current_users list.
let new_users:string[] = ['Nazia','SaNa','Hamza','Zoya','Zaviyar'];

new_users.forEach(newUsername => {
    let lowercase: string = newUsername.toLocaleLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsername} is not available .please write a differnt username`);

    } else{
        console.log(`The user name ${newUsername} is avaliable`);
    }
})




