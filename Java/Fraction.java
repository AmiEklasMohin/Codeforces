import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Fraction {
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    public static boolean isCoprime(int a, int b) {
        int gcd = gcd(a, b);
        return (gcd == 1);
    }

    public static List<Integer> properFraction(int sum) {
        int numerator = sum / 2;
        int denominator = (sum + 1) / 2;
        List<Integer> result = new ArrayList<>();
        while (!isCoprime(numerator, denominator)) {
            numerator -= 1;
            denominator += 1;
        }
        result.add(numerator);
        result.add(denominator);
        return result;
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int givenSum = scan.nextInt();
        List<Integer> result = properFraction(givenSum);
        System.out.println(result.get(0) + " " + result.get(1));
        scan.close();
    }
}

