var twoInteger = readline().split(' ').map(x => parseInt(x));
var scoreEarned = readline().split(' ').map(x => parseInt(x));
var n = twoInteger[0], k = twoInteger[1];
var check = 0, count = 0;
for (var j = 0; j < k; j++) {
    if (scoreEarned[j] > 0) {
        count++;
    } else {
        break;
    }
}
check = scoreEarned[k - 1];
for (var j = k; j < n; j++) {
    if (scoreEarned[j] > 0 && scoreEarned[j] === check) {
        count++;
    } else {
        break;
    }
}
print(count);