console.log('arrow');

const pirmas = 7;
const antras = 5;

// iprasta funkcija
function suma (a, b) {
    return a + b;
}
const r1 = suma(pirmas,antras);
console.log(r1);

//bevarde - anonimine funkcija
const atimtis = function  (a, b) {
    return a - b;
}
const r2 = atimtis(pirmas,antras);
console.log(r2);

// rodykline funkcija
// logikos bloke {} yra tik 1 procedura, galime nerasyti {} ir return
const plius = (a, b) => a + b;
console.log(plius(pirmas, antras));

const dalyba = (a, b) => a / b;
console.log(dalyba(pirmas, antras));

// rodykline funkcija

const daugyba = (a, b) => {return a * b;}
console.log(daugyba(pirmas, antras));

// rodykline funkcija **kvadratu
// jei parametru bloke () yra vienas parametras, galima nerasyt
const kvadratu = a => a * a;
console.log(kvadratu(pirmas));

///pvz

const tekstas = 'Labas Rytas';
const pirmaRaide = s => s.charAt(0);


console.log(pirmaRaide(tekstas));