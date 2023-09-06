var n = parseInt(readline());
var a = parseInt(readline());
var b = parseInt(readline());
var draw = 0;
var ans = "";
if (n === 1) {
    if (a === b) {
        draw = 1;
    }
    ans = ans.concat(a, ':', b);
    print(draw);
    print(ans);
} else {
    if ((a + b) < n) {
        draw = n - a - b;
    } 
    print(draw);
    while (draw > 0) {
        print('0:0');
        draw = draw - 1;
        n = n - 1;
    }
    while (n > 0) {
        if (n == 1) {
            ans = ans.concat(a, ':', b);
            print(ans);
            n  = n - 1;
        } else {
            if ((a <= b && a !== 0) || b === 0) {
                print('1:0');
                a = a - 1;
            } else {
                print('0:1');
                b = b - 1;
            }
            n = n - 1;
        }
    }
}
