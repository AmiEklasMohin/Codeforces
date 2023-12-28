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
        let n = parseInt(readline());
        let count = 0, x = null;
        for (let j = 1; j <= 9; ++j) {
            x = j;
            while (x <= n) {
                count += 1;
                x = x * 10 + j;
            }
        }
        console.log(count);
    }
}
