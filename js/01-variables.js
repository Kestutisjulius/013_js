/* 
KINTAMIEJI
iniciavimo budas:
const - default / nekintantis pradinis. negalima priskirt kitokios reiksmes.
let - antrinis budas inicijuoti kai zinome kad reiksme tures keistis
var - pats seniausias ir geriau nenaudoti jei rupi saugumas.

Duomenu tipas:
 -number, 
 -string (tekstas), 
 -boolean (logine reiksme) true | false
 - array (masyvas)
*/
const name = 'Petras';
const pazymiai = [2, 5, 9, 9];
pazymiai.push(8);
pazymiai[0]='6';
const ba = false;

console.log(pazymiai);
/* JavaScript mini užduotys */
  /* Kintamųjų inicijavimas */
console.log('--------ND1--------');
const a = 0;
const b = 1;
const c = 2;
console.log(a, b, c);
console.log('--------ND2--------');
const d = '0';
const e = '11';
const f = '222';
console.log(d, e, f);
console.log('--------ND3--------');
const sarasas = [1, 4, 7, 2, 5];
console.log(sarasas);
const sarasas1 = [9, 5, 4, 8, 5];
console.log(sarasas1);
const sarasas2 = [5, 4, 8, 7, 9];
console.log(sarasas2);
console.log('--------ND4--------');
const xsarasas = ['1', '4', '7', '2', '5'];
console.log(xsarasas);
const xsarasas1 = ['9', '5', '4', '8', '5'];
console.log(xsarasas1);
const xsarasas2 = ['5', '4', '8', '7', '9'];
console.log(xsarasas2);
console.log('--------ND5--------');
const sumOfNumbers = a + b + c;
console.log('sum-> "%i" <- is a + b + c' ,sumOfNumbers);
console.log('--------ND6--------');
const txt = 'this numbers are strings: ' + d + ' ' + e + ' ' + f;
console.log(txt);
console.log('--------ND7--------');
const s = sarasas[0]-sarasas[1]+sarasas[2]-sarasas[3]+sarasas[4];
console.log('saraso verciu aritmetine reiksme: %i', s);
console.log('--------ND8--------');
const s1 = sarasas1[0]-sarasas1[1]+sarasas1[2]-sarasas1[3]+sarasas1[4];
console.log('saraso verciu aritmetine reiksme: %i', s1);
console.log('--------ND9--------');
const s2 = sarasas2[0]-sarasas2[1]+sarasas2[2]-sarasas2[3]+sarasas2[4];
console.log('saraso verciu aritmetine reiksme: %i', s2);
console.log('--------ND10-------');
const line = xsarasas.join(', ');
console.log(line);
console.log('--------ND11-------');
const line2 = xsarasas1.join(', ');
console.log(line2);
console.log('--------ND12-------');
const line3 = xsarasas2.join(', ');
console.log(line3);
console.log('--------ND13---Kintamuju palyginimas----');
const n1 = 0; const n2 = 1;
if (n1 > n2) {
  console.log('Bandykite dar karta');
} else {console.log('Pomidoras');}
if (n1 != n2) {
  console.log('Pomidoras');
} else {console.log('Bandykite dar karta');}
if (n1 >= n2) {
  console.log('Bandykite dar karta');
} else {console.log('Pomidoras');}
if (n1 <= n2) {
  console.log('Pomidoras');
} else {console.log('Bandykite dar karta');}
console.log('--------ND14---teksto kintamojo ilgis----');
console.log('d ilgis: ' + d.length);
console.log('e ilgis: ' + e.length);
console.log('f ilgis: ' + f.length);
console.log('--------ND15---saraso kintamojo ilgis----');
console.log('saraso ilgis:' + sarasas.length)


const ad = 0.6900000000000001;
let bd = Math.round(ad * 100)/100;
console.log(bd);
console.log('--------ND16---ciklas for----');
console.log('sum between -50 & 50');
const min = -50; const max = 50;
let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
  }
  console.log('is: -> ' + sum);

  // const sumAll = arr => sumRange(...minMax(arr));
  // sumAll([1, 4])
