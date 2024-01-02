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
    let n = parseInt(readline());
    let x = 0, y = 0, z = 0;
    for (let i = 1; i <= n; ++i) {
        let vec = readline().split(' ').map(x => parseInt(x));
        x = x + vec[0];
        y = y + vec[1];
        z = z + vec[2];
    }
    if (x === 0 && x === y && x === z) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}
