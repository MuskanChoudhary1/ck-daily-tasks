import java.util.*;


public class reverse {
    
    public static int reverseNum(int num) {
        int rev = 0;
        while(num != 0) {
            rev = rev * 10 + (num % 10);
            num = num/10;
        }
        return rev;
    }


    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        System.out.println("Enter a number");
        int num = sc.nextInt();

        System.out.println("Reverse num: " + reverseNum(num));
    }
}
