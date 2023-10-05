function divideInEvenWeight(watermelonWeight) {
    if (watermelonWeight >= 4 && watermelonWeight % 2 === 0) {
        print("YES");
    } else {
        print("NO");
    }
}
var watermelonWeight = Number.parseInt(readline());
divideInEvenWeight(watermelonWeight);
