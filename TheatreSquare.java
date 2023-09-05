import java.util.Scanner;

public class TheatreSquare {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextInt();
        long m = sc.nextInt();
        long a = sc.nextInt();
        long row = (n + a - 1) / a;
        long col = (m + a - 1) / a;
        long numberOfFlagstone = row * col;
        System.out.println(numberOfFlagstone); 
        sc.close();
    }
}