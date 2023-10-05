import java.util.Scanner;
import java.lang.Math;

public class CheapTravel {
    static int minimumSumOne(int n, int m, int a, int b) {
        int minimumRubles = a * n;
        return minimumRubles;
    }
    static int minimumSumTwo(int n, int m, int a, int b) {
        int k = n / m;
        int minimumRubles = k * b;
        int x = (n - (k * m)) * a;
        x = Math.min(x, b);
        minimumRubles += x;
        return minimumRubles;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int minimumRubles =  minimumSumOne(n, m, a, b);
        minimumRubles = Math.min(minimumSumTwo(n, m, a, b), minimumRubles);
        System.out.println(minimumRubles);
        scanner.close();
    }
}
