/* Loops: for, while, for-in, for-of, foreach, ... */
// object-loop , for-in..

const pazymiai = [10, 2, 8, 4, 6];

const pazymiuSuma = 0;
const pazymiuKiekis = pazymiai.length;
a = [];

let countFor = 0;
pazymiai.forEach(pazimys => {
    countFor += pazimys;
});
console.log('---------WHILE-------------------');
let countWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazimys = pazymiai[i2];
    countWhile += pazimys;
    i2 ++;
    console.log(`${i2}) pazymys ${pazimys} [${countWhile}]`);
}

//FOR-OF
console.log('----------FOR OF------------------');
let sumaForOf = 0;
let i3 = 0;
for (const pazimys of pazymiai) {
    sumaForOf += pazimys;
    console.log(`${i3++}) pazymys ${pazimys} [${sumaForOf}]`);
}
// ForEACH
console.log('----------FOREACH---------leciausias---------');
let sumaForEach = 0;

pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4++}) pazymys ${pazymys} [${sumaForEach}]`);
});

