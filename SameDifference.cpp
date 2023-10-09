#include <iostream>
#include <map>
using namespace std;

long long sameDifference() {
    int sizeOfArray, inputArray[200000];
    map<int, int> sameValue;
    long long pairCount = 0;
    cin >> sizeOfArray;
    for (int i = 0; i < sizeOfArray; i += 1) {
        cin >> inputArray[i];
        inputArray[i] = inputArray[i] - i;
    }
    for (int i = 0; i < sizeOfArray; i += 1) {
        pairCount += (long)(sameValue[inputArray[i]]);
        sameValue[inputArray[i]] += 1;
    }
    return pairCount;
}

int main() {
    int testCase;
    cin >> testCase;
    for (int i = 1; i <= testCase; i += 1) {
        long long numberOfPairs = sameDifference();
        cout << numberOfPairs << endl;
    }
    return 0;
}
