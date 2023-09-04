import java.util.Scanner;

public class InSearchOfEasyProblem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, k, j = 0;
        n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            k = sc.nextInt();
            if (k == 1) {
                j++;  
            }
        }
        if (j > 0) {
            System.out.println("HARD");
        }
        else {
            System.out.println("EASY");
        }  
        sc.close();
    }
}
