var n = readline();
var line = readline();
var asciiValue = 0;
var arr = [];
var isPangram = true;
for (var i = 0; i < 26; i++) {
    arr[i] = false;
}
line = line.toLowerCase()
for (var i = 0; i < n; i++) {
    asciiValue = line.charCodeAt(i) - 97;
    arr[asciiValue] = true;
}
for (var i = 0; i < 26; i++) {
    if(arr[i] === false) {
        isPangram = false;
        break;
    }
}
if (isPangram === true) {
    print("YES");
} else {
    print("NO");
}