#include <bits/stdc++.h>
using namespace std;
void solveTheProblem() {
    int n, a, b, k;
    cin >> n >> a >> b;
    k = max((n - a - b - 1), 0);
    cout<<(n - a - k)<<endl;
}
int32_t main(int argc, const char *argv[]) {
    ios_base::sync_with_stdio(false);cin.tie(nullptr);
    cout.tie(nullptr);
    #ifndef ONLINE_JUDGE
        freopen("input.txt","r",stdin);
        freopen("output.txt","w",stdout);
    #endif
    solveTheProblem();
    return 0;
}