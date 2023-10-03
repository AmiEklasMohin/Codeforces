import java.util.Scanner;

public class Expression {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();
        int maxValue = Math.max(((a + b) * c), (a * (b + c)));
        maxValue = Math.max(maxValue, (a * b * c));
        maxValue = Math.max(maxValue, (a + b + c));
        System.out.println(maxValue);
        scanner.close();
    }
}
