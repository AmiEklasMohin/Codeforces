function lexicographicallySmallestString() {
    var inputLength = readline().split(' ').map(x => parseInt(x));
    var inputSequence = readline().split(' ').map(x => parseInt(x));
    var lengthOfSequence = inputLength[0];
    var lengthOfString = inputLength[1];
    var smallestString = [];
    for (var i = 0; i < lengthOfString; i++) {
        smallestString[i] = 'B';
    }
    for (var j = 0; j < lengthOfSequence; j++) {
        var k = lengthOfString - inputSequence[j];
        var x = inputSequence[j] - 1;
        if (x <= k && smallestString[x] === 'B') {
            smallestString[x] = 'A';
        } else if (smallestString[k] === 'B') {
            smallestString[k] = 'A';
        } else {
            smallestString[x] = 'A';
        }
    }
    return smallestString;
}

var testCase = Number.parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    var smallestString = lexicographicallySmallestString();
    print(smallestString.join(''));
}
