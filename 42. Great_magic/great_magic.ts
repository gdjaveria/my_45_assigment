let magician : string[] = ['Criss angel','Shin lim','Rick jay','Alan curtis adam'];


function make_great(magicanMagic:string[]){
    
    for(let i=0 ; i<magicanMagic.length; i++){
          magician [i] = 'The Great'  +   magicanMagic[i]
    }
}
function show_magicians(magicians: string[]){
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);