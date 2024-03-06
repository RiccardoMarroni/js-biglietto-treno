let lunghezza = parseInt(prompt ('inserisci la lunghezza della tratta in km'))
let età = (prompt ('inserisci la tua età'))
let prezzo = lunghezza * 0.21;


function error(){
if (isNaN(lunghezza)) {
    document.getElementById("errore").innerHTML = "Il valore dei km da te inserito è scorretto.";
    return;
}
}

if(età < 18){
   prezzo = prezzo - (prezzo * 20 / 100);
   prezzo = (Math.round(prezzo * 100) / 100).toFixed(2); 
   document.getElementById("ticket").innerHTML =
         "il costo del tuo biglietto è: " + prezzo + '€' 
         
}else if(età > 65){
    prezzo = prezzo - (prezzo * 40 / 100);
    prezzo = (Math.round(prezzo * 100) / 100).toFixed(2); 
   document.getElementById("ticket").innerHTML =
         "il costo del tuo biglietto è: " + prezzo + '€'
}
else{
    document.getElementById("ticket").innerHTML =
    prezzo = (Math.round(prezzo * 100) / 100).toFixed(2); 
    "il costo del tuo biglietto è: " + prezzo + '€'
}


