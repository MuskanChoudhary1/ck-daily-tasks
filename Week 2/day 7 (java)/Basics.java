import java.util.*;

public class Basics {

    public static int sumOfDigits(int num) {
        int sum = 0;

        while(num > 0) {
            sum = sum + (num % 10);
            num = num/10;
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();

        System.out.println("Sum of digits: " + sumOfDigits(num));
    }
}