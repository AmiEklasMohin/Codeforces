function dividedInEqualParts(watermelonWeight) {
    var isPossible = false;
    if (watermelonWeight >= 4 && watermelonWeight % 2 === 0) {
        isPossible = true;
    }
    return isPossible;
}

var watermelonWeight = Number.parseInt(readline());
var isPossible = dividedInEqualParts(watermelonWeight);
if (isPossible) {
    print("YES");
} else {
    print("NO");
}
