import java.util.Scanner;

public class PasswordCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = 0, b = 0, c = 0, d = 0;
        String pass = sc.nextLine();
        for (int i = 0; i < pass.length(); i++) {
            int ascii = pass.charAt(i);
            if (ascii >= 97 && ascii <= 122) {
                a = 1;
            } else if (ascii >= 65 && ascii <= 90) {
                b = 1;
            } else if (ascii >= 48 && ascii <= 57) {
                c = 1;
            }
        }
        d = a + b + c;
        if (d == 3 &&  pass.length() >= 5) {
            System.out.println("Correct");
        } else {
            System.out.println("Too weak");
        }
        sc.close();
    }
}