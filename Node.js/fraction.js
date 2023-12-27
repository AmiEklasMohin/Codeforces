'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();    
});

function readline() {
    return inputString[currentLine++];
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function isCoprime(a, b) {
    return (gcd(a, b) === 1);
}

function main() {
    let num = parseInt(readline());
    let x = parseInt(num / 2);
    let y = parseInt(num - x);
    while (!isCoprime(x, y)) {
        x -= 1;
        y += 1;
    }
    console.log(x + ' ' + y);
}
