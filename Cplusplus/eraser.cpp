#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    int minOperation(int n, int k, string str) {
        int op = 0;
        for (int i = 0; i < n; ++i) {
            if (str[i] == 'B') {
                op += 1;
                i = i + k - 1;
            }
        }
        return op;
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);cout.tie(nullptr);
    #ifndef ONLINE_JUDGE
        freopen("input.txt","r",stdin);
        freopen("output.txt","w",stdout);
    #endif
    Solution ans;
    int test_case;
    cin >> test_case;
    for (int i = 1; i <= test_case; ++i) {
        int n, k;
        string str;
        cin >> n >> k >> str;
        int min_op = ans.minOperation(n, k, str);
        cout << min_op << endl;
    }
    return 0;
}
