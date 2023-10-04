#include <iostream>
using namespace std;

int main() {
    int weightOfLimak, weightOfBob, countYears;
    cin >> weightOfLimak >> weightOfBob;
    countYears = 0;
    while (weightOfLimak <= weightOfBob) {
        weightOfLimak *= 3;
        weightOfBob *= 2;
        countYears++;
    }
    cout << countYears << endl;
    return 0;
}
