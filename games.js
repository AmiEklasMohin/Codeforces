var n = readline();
var teamListOne = [];
var teamListTwo = [];
var count = 0;
var x = "";
for (var i = 1; i <= n; i++) {
    x = readline().split(' ').map(x => parseInt(x));
    teamListOne.push(x[0]);
    teamListTwo.push(x[1]);
}
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (teamListOne[i] === teamListTwo[j]) {
            count++;
        }
    }
}
print(count);