function wrongSubtraction(n, k) {
    for (var i = 1; i <= k; i++) {
        if ((n % 10) === 0) {
            n = n / 10;
        } else {
            n = n - 1;
        }
    }
    return n;
}

var inputLine = readline().split(' ').map(x => Number.parseInt(x));
var n = inputLine[0];
var k = inputLine[1];
var subtractionResult = wrongSubtraction(n, k);
print(subtractionResult);
