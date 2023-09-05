var num = parseInt(readline());
var k = parseInt(num / 2);
var kPrimes = "";
while (num > 0) {
    if (num === 3) {
        kPrimes = kPrimes.concat('3', ' ');
        num = num - 3;
    } else {
        kPrimes = kPrimes.concat('2', ' ');
        num = num - 2;
    }
}
print(k);
print(kPrimes);