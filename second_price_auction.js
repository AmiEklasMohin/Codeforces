var n = readline();
var priceList = readline().split(' ').map(x => parseInt(x));
var temp = priceList.slice();
temp.sort (function (a, b) {
    return a - b;
});
var k = temp[n - 2];
var maxPrice = temp[n - 1];
var index = 0;
for (var i = 0; i < n; i++) {
    if (priceList[i] === maxPrice) {
        index = i + 1;
        break;
    }
}
print(index, k);