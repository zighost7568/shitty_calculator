
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.clear();
//caluclatrice
console.log("Welcome to my useless calculator");

console.log("type /stop to quit");

function calcul() 
{

  readline.question("===>", (reponse) => {
    
  if (reponse == "/stop")
  {
    console.log("Goodby !");
    readline.close();
    return;
  }
  else
  {
    try {
    let resultat = eval(reponse);
    console.log(resultat);
    } catch (error) {
      console.log("ERROR")
    }

    calcul();
  }
    
  })

}

calcul();