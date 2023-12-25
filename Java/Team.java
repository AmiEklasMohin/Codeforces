import java.util.*;

public class Team {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int solveCount = 0;
        for (int i = 1; i <= n; ++i) {
            int a = scan.nextInt();
            int b = scan.nextInt();
            int c = scan.nextInt();
            int x = a + b + c;
            if (x > 1) {
                solveCount += 1;
            }
        }
        System.out.println(solveCount);
        scan.close();
    }
}
