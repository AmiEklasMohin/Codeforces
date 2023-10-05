#include <iostream>
#include <cmath>

int minimumSumOne(int n, int m, int a, int b) {
    int minimumRubles = a * n;
    return minimumRubles;
}

int minimumSumTwo(int n, int m, int a, int b) {
    int k = n / m;
    int p = (n - (k * m)) * a;
    p = std::min(p, b);
    int minimumRubles = k * b;
    minimumRubles += p;
    return minimumRubles;
}

int main() {
    int n, m, a, b;
    std::cin >> n >> m >> a >> b;
    int minimumRubles = minimumSumOne(n, m, a, b);
    minimumRubles = std::min(minimumSumTwo(n, m, a, b), minimumRubles);
    std::cout << minimumRubles << std::endl;
    return 0;
}
