#include <iostream>
#include <algorithm>
#include <vector>
#include <map>
using namespace std;

int main() {
    int numberOfBoys, numberOfGirls, maxPairs, in;
    vector<int>boysDancingSkill;
    map<int, int>girlsDancingSkill;
    cin >> numberOfBoys;
    maxPairs = 0;
    for (int i = 0; i < numberOfBoys; i += 1) {
        cin >> in;
        boysDancingSkill.push_back(in);
    }
    cin >> numberOfGirls;
    for (int i = 0; i < numberOfGirls; i += 1) {
        cin >> in;
        girlsDancingSkill[in] += 1;
    }
    sort(boysDancingSkill.begin(), boysDancingSkill.end());
    for (int i = 0; i < numberOfBoys; i += 1) {
        if(girlsDancingSkill[boysDancingSkill[i] - 1] > 0) {
            maxPairs += 1;
            girlsDancingSkill[boysDancingSkill[i] - 1] -= 1;
        } else if(girlsDancingSkill[boysDancingSkill[i]] > 0) {
            maxPairs += 1;
            girlsDancingSkill[boysDancingSkill[i]] -= 1;
        } else if (girlsDancingSkill[boysDancingSkill[i] + 1]) {
            maxPairs += 1;
            girlsDancingSkill[boysDancingSkill[i] + 1] -= 1;
        }
    } 
    cout << maxPairs << endl;
    return 0;
}
