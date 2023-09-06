import java.util.Scanner;

public class TheNumberOfPositions {
    public static void main(String []args) {
        Scanner sc = new Scanner (System.in);
        int n = sc.nextInt();
        int a = sc.nextInt();
        int b = sc.nextInt();
        int k = Math.max((n - a - b - 1), 0);
        System.out.println(n - a - k);
        sc.close();
    }
}