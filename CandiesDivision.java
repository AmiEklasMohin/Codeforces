import java.util.Scanner;
import java.lang.Math;

public class CandiesDivision {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int testCase = scanner.nextInt();
        for (int i = 1; i <= testCase ; i++) {
            int n = scanner.nextInt();
            int k = scanner.nextInt();
            int maximumCandiesGiven = (n / k) * k;
            int x = Math.min((n - maximumCandiesGiven), (k/2));
            maximumCandiesGiven += x;
            System.out.println(maximumCandiesGiven);
        }
        scanner.close();
    }
}
