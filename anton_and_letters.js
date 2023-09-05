var letterSet = readline();
var isPresent = [];
var x = 0, count = 0;
for (var i = 0; i < 26; i++) {
    isPresent[i] = false;
}
for (var i = 0; i < letterSet.length; i++) {
    x = letterSet.charCodeAt(i);
    if (x >= 97 && x <= 122) {
        isPresent[x - 97] = true;
    }
}
for (var i = 0; i < 26; i++) {
	if (isPresent[i] === true) {
	   	count++;
	}
}
print(count);