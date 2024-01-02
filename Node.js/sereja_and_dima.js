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
    let cards = readline().split(' ').map(x => parseInt(x));
    let left_pointer = 0;
    let right_pointer = n - 1;
    let parity = 'odd';
    let sereja = 0, dima = 0;
    while (right_pointer >= left_pointer) {
        if (cards[right_pointer] > cards[left_pointer]) {
            if (parity === 'odd') {
                sereja += cards[right_pointer];
                parity = 'even';
            } else {
                dima += cards[right_pointer];
                parity = 'odd';
            }
            right_pointer -= 1;
        } else {
            if (parity === 'odd') {
                sereja += cards[left_pointer];
                parity = 'even';
            } else {
                dima += cards[left_pointer];
                parity = 'odd';
            }
            left_pointer += 1;
        }
    }
    console.log(sereja + ' ' + dima);
}
