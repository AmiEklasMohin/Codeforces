import java.util.Scanner;

public class Subtractions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCase = sc.nextInt();
        for (int i = 1; i <= testCase ; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            if (a < b) {
                int t = a;
                a = b;
                b = t;
            }
            int numberOfOperations = 0;
            while ( a > 0 && b > 0) {
                int k = a / b;
                numberOfOperations = numberOfOperations + k;
                k = a % b;
                a = b;
                b = k;
            }
            System.out.println(numberOfOperations);
        }
        sc.close();
    }
}