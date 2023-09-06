var str = readline();
var a = '', b = '', c = '', ans = '';
var k = 0;
for (var i = 1; i < str.length; i++) {
    c = str.charAt(i)
    if (c === '.') {
        k = i;
        a = str.charAt(i-1);
        b = str.charAt(i+1);
        break;
    }
}
if (a ==='9') {
    print('GOTO Vasilisa.');
} else if (b >= '5') {
    for (var i = 0; i < (k - 1); i++) {
        ans = ans + str.charAt(i);
    }
    a = parseInt(a);
    a++;
    ans = ans.concat(a);
    print(ans);
} else {
    for (var i = 0; i < k; i++) {
        ans = ans + str.charAt(i);
    }
    print(ans);
}
