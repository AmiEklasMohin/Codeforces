function solveTheProblem(k, n, w) {
    var totalPrice = 0;
    for (var i = 1; i <= w; i++) {
        totalPrice += i * k;
    }
    var needToBorrow = totalPrice - n;
    return Math.max(needToBorrow, 0);
}
var inputLine = readline().split(' ').map(x => parseInt(x));
var k = inputLine[0], n = inputLine[1] , w = inputLine[2];
var borrowFromFriend = solveTheProblem(k, n, w);
print(borrowFromFriend);
