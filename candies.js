var input = readline().split(' ').map(x => parseInt(x));
var n = input[0];
var m = input[1];
var x = parseInt(n / m);
var k = n - (x * m);
var ans = [];
for (var i = 1; i <= m; i++) {
    if (k > 0) {
        ans.push(x + 1);
        k--;
    } else {
        ans.push(x);
    }
}
print(ans.join(' '));