import java.util.Scanner;

public class BearAndBigBrother {
    public static void main(String[] args)
    {
        Scanner sc = new Scanner (System.in);
        int weightOfLimak = sc.nextInt();
        int weightOfBob = sc.nextInt();
        int countYears = 0;
        while (weightOfLimak <= weightOfBob) {
            weightOfLimak *= 3;
            weightOfBob *= 2;
            countYears++;
        }
        System.out.println(countYears);
        sc.close(); 
    }
}