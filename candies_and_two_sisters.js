function divideCandies() {
    var numberOfCandies = readline();
    numberOfCandies -= 1;
    numberOfCandies /= 2;
    return (parseInt(numberOfCandies));
}
var testCase = readline();
for (var i = 1; i <= testCase; i++) {
    var ans = divideCandies();
    print(ans);
}