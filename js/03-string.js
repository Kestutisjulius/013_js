/* 
STRING:

kabutes:
- viengubos('');
- dvigubos ("");
- \ escapinimas;
- ` backtikas;

Teksto simboliu kiekis txt.length

- %i - integer
- %s - string
- %d - double

*/

const name = `Petras`;
console.log(name);
const age = 87;
const sentenc = 'Client: ' + age + ' ' + name;
const btClient = `Client ${name} is ${age} old`;
console.log(btClient);

const n1 = 7;
const n2 = 5;

const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);
console.log('simb kiekis: ' + ats.length);
