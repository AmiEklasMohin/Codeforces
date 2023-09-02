var numberOfFriends = readline();
var trackGifts = readline().split(' ').map(x => parseInt(x));
var outputArray = [];
for (var i = 0; i < numberOfFriends; i++) {
    var k = trackGifts[i];
    outputArray[k - 1] = i + 1;
}
print(outputArray.join(' '));
