/***************
 ***__MOHIN__***
 ***************/
#include <iostream>
#include <cstdio>
#include <cstring>
#include <cmath>
#include <sstream>
#include <fstream>
#include <cctype>
#include <cstdlib>
#include <string>
#include <iomanip>
#include <utility>
#include <numeric>
#include <set>
#include <queue>
#include <stack>
#include <list>
#include <vector>
#include <map>
#include <unordered_set>
#include <unordered_map>
#include <algorithm>
#include <iterator>
#define pi (2*acos(0))
#define md 1000000007
#define mx 1000000

class Solution {
public:
    void solve() {
        int number_of_problems, solve_count{0};
        bool sure[3];
        std::cin >> number_of_problems;
        for (int i = 1; i <= number_of_problems; i += 1) {
            std::cin >> sure[0] >> sure[1] >> sure[2];
            int total = sure[0] + sure[1] + sure[2];
            if (total >= 2) {
                solve_count += 1;
            }
        }
        std::cout << solve_count << std::endl;
    }
};

int32_t main(int argc, const char *argv[]) {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);std::cout.tie(nullptr);
    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);
        freopen("output.txt", "w", stdout);
    #endif
    Solution team;
    team.solve();
    return 0;
}
