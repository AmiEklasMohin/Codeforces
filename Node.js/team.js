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

function main() {
    let n = parseInt(readline());
    let solveCount = 0;
    for (let i = 1; i <= n; ++i) {
        let num = readline().split(' ').map(x => parseInt(x));
        let x = num[0] + num[1] + num[2];
        if (x >= 2) {
            solveCount += 1;
        }
    }
    console.log(solveCount);
}
