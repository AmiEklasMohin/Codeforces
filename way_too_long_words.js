function modifyTheWord(inputWord) {
    var outputWord = inputWord;
    if (inputWord.length > 10) {
        var wordLength = inputWord.length;
        var firstLetter = inputWord.charAt(0);
        var lastLetter = inputWord.charAt(wordLength - 1);
        wordLength = wordLength - 2;
        outputWord = firstLetter.concat(wordLength, lastLetter);
    }
    return outputWord;
}
var testCase = Number.parseInt(readline());
for (var i = 1; i <= testCase; i++) {
    var inputWord = readline();
    var outputWord = modifyTheWord(inputWord);
    print(outputWord);
}
