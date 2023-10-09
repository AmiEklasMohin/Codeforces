#include <iostream>
using namespace std;

int countYears(int weightOfLimak, int weightOfBob) {
    int requiredYears = 0;
    while (weightOfLimak <= weightOfBob) {
        weightOfLimak = weightOfLimak * 3;
        weightOfBob = weightOfBob * 2;
        requiredYears += 1;
    }
    return requiredYears;
}

int main() {
    int weightOfLimak, weightOfBob, requiredYears;
    cin >> weightOfLimak >> weightOfBob;
    requiredYears = countYears(weightOfLimak, weightOfBob);
    cout<< requiredYears <<endl;
    return 0;
}
