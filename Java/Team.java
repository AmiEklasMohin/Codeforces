import java.util.*;

public class Team {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n, a, b, c, solveCount = 0;
        n = scan.nextInt();
        for (int i = 1; i <= n; ++i) {
            a = scan.nextInt();
            b = scan.nextInt();
            c = scan.nextInt();
            if ((a + b + c) >= 2) {
                solveCount += 1;
            }
        }
        System.out.println(solveCount);
        scan.close();
    }
}
