import * as fs from 'node:fs';

let data = 'ciao sono emanuele ed ho 25 anni'

fs.writeFile('testo.txt', data, (error) => {
    if(error){
        console.error(error)
        return;
    }
    console.log(data);
})