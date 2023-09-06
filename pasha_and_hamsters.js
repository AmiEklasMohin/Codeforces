var input = readline().split(' ').map(x => parseInt(x));
var arthur = readline().split(' ').map(x => parseInt(x));
var alexander = readline().split(' ').map(x => parseInt(x));
var ans = [];
var k = 0;
for (var i = 0; i < arthur.length; i++) {
    k = arthur[i];
    ans[k - 1] = 1;
}
for (var i = 0; i < alexander.length; i++) {
    k = alexander[i];
    ans[k - 1] = 2;
}
print(ans.join(' '));