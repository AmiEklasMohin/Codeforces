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
    let testCase = parseInt(readline());
    for (let i = 1; i <= testCase; ++i) {
        let distance = readline().split(' ').map(x => parseInt(x));
        let inFront = 0;
        for (let j = 1; j < 4; ++j) {
            if (distance[j] > distance[0]) {
                inFront += 1;
            }
        }
        console.log(inFront);
    }
}
