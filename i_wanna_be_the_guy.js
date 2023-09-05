var n = readline();
var littleX = readline().split(' ').map(x => parseInt(x));
var littleY = readline().split(' ').map(x => parseInt(x));
var ind = 0;
var x = true;
var levelArray = [];
for (var i = 0; i < n; i++) {
    levelArray[i] = 0;
}
for (var i = 1; i < littleX.length; i++) {
    ind = littleX[i];
    levelArray[ind - 1] = ind;
}
for (var i = 1; i < littleY.length; i++) {
    ind = littleY[i];
    levelArray[ind - 1] = ind;
}
for (var i = 0; i < n; i++) {
    if (levelArray[i] !== (i + 1)) {
        x = false;
        break;
    }
}
if (x === true) {
    print("I become the guy.");
} else {
    print("Oh, my keyboard!");
}