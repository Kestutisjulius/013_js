/* visi mokiniai turi tik 4 pazymius.
-suskaiciuoti vidurki  */
const petras = [10, 4, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

let petroSuma = 0;
let maryteSuma = 0;
let jonasSuma = 0;
let onaSuma = 0;

function vidurkis(arr){
    
    let pazymiuSuma = 0;
    for(var i=0; i<arr.length; i++){
    pazymiuSuma +=arr[i]/arr.length;}
    return pazymiuSuma;
}
console.log('Petras: ' + vidurkis(petras));
console.log('Maryte: ' + vidurkis(maryte));
console.log('Jonas: ' + vidurkis(jonas));
console.log('Ona: ' + vidurkis(ona));

/* Funkcija */

function vardoAnalize(vardas) {

    return `${vardas} pirma raide ${vardas[0]} ir vardas sudarytas is ${vardas.length} raidziu`;
}

const petroVardas = vardoAnalize('Nebepasikiskiakopusteliaudamas');
console.log(petroVardas);

function sum (a, b) {
    const x = `${a} + ${b} = ${(a*100 + b*100)/100}`;
    return x;
}

const c = sum(0.1, 0.2);
console.log(c);