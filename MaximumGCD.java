import java.util.Scanner;

public class MaximumGCD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCase = sc.nextInt();
        for (int i = 1; i <= testCase; i++) {
            int n = sc.nextInt();
            System.out.println(n / 2);
        }
        sc.close();
    }
}