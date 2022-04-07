/* NUMBERS:

-- normalus:
    -sveikieji
    -desimtainiai
--nenormalus:
    - Nan (not-a-number)
    - Infinity; begalybe
    */

    console.log('NUMBERS:');
    const svaikasis = 5;
    const desimtainis = 3.14;
    const neigiamasDesimtainis = -3.14;
    const neSkaicius = NaN;
    const begalybe = Infinity;
    //true = 1;
    //false = -1;

    
    const pirmas = 7;
    const antras = 5;
    const dalmuo = pirmas-antras;
    console.log(dalmuo);

    /* js Aritmetic Operarors  * / + - 
    ++ increase 1,
    ++ decrease 1,
    +=, -=, /=, *=, %=  - asign to yorself with operator,
    
    */

    
    console.log(2^4); //?
    console.log(2**2); //laipsnis
    console.log(7 % 5); //liekana
    let pinigineAfter = 0;
    pinigineAfter ++; //include before * -- includ
    console.log('Pinigine: ' + ++pinigineAfter);