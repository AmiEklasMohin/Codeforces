import java.util.Scanner;

public class AntonAndPolyhedrons {
    public static void main(String []args) {
        Scanner sc = new Scanner (System.in);
        int n, m = 0;
        n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            String name = sc.next();
            if ("Tetrahedron".equals(name)) {
                m = m + 4;
            } else if ("Cube".equals(name)) {
                m = m + 6;
            } else if ("Octahedron".equals(name)) {
                m = m + 8;
            } else if ("Dodecahedron".equals(name)) {
                m = m + 12;
            } else if ("Icosahedron".equals(name)) {
                m = m + 20;
            }
        }
        System.out.println(m);
        sc.close();
    }
}