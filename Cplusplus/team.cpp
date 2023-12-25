#include <iostream>
using namespace std;

class Solution {
public:
    int solveCount() {
        int n, sum = 0;
        bool arr[3];
        cin >> n;
        for (int i = 1; i <= n; ++i) {
            cin >> arr[0] >> arr[1] >> arr[2];
            int x = arr[0] + arr[1] + arr[2];
            if (x >= 2) {
                sum += 1;
            }
        }
        return sum;
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);
        freopen("output.txt", "w", stdout);
    #endif
    Solution ans;
    int x = ans.solveCount();
    cout << x << endl;
    return 0;
}
