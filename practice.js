/* for ciklus gyakorlása 
két dimenziós tömb bejárásával
és a páros számok kiirásával,
valamint hasonló alapfeladatokkal */

//console.log("Fsifsi");

let tomb = [1,2,3,10,11];
let paros = {};
let paratlan= {};
let szum =0;

for(let i=0; i<tomb.length; i++) {
        if (tomb[i] %2 == 0) {
            paros = tomb[i];
            szum += tomb[i];
        } else {
            // páratlan számok kiiratása
            paratlan = tomb[i];
        } 

        
 }

        console.log("A páros elemek:", paros);
        console.log("A páratlan elemek:", paratlan);

 console.log("Ezek összege: ", szum);
