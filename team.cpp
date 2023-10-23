#include <iostream>
using namespace std;

class Solution {
public:
    int solveCount() {
        int num_of_problems, solve_count{0};
        bool sure[3];
        cin >> num_of_problems;
        for (int i = 1; i <= num_of_problems; ++i) {
            cin >> sure[0] >> sure[1] >> sure[2];
            int x = sure[0] + sure[1] + sure[2];
            if (x >= 2) {
                solve_count += 1;
            }
        }
        return solve_count;
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
    int problems_implemented = ans.solveCount();
    cout << problems_implemented << endl;
    return 0;
}
