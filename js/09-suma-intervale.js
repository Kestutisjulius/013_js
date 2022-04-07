function sumaIntervale(a, b){
    let sum = 0;
    for(var i=a; i<=b; i++){
        sum += i;
    }

    return sum;
}

console.log(sumaIntervale(0,0), '-->', 0);
console.log(sumaIntervale(0,4), '-->', 10);
console.log(sumaIntervale(0,100), '-->', 5050);
console.log(sumaIntervale(-70,30), '-->', -2020);

