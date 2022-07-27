function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }



async function getResults(...players){
    try{
        const data = await Promise.all(
            players.map(async (player) => await luckyDraw(player))
            )
        console.log('data:', data)
        
    }catch(error){
        console.error(error)
    }
}

getResults('Tina', 'Jorge', 'Julien');
