import java.util.*;

class Calculator {

    public double add(double a, double b) {
        return a+b;
    }


    public double sub(double a, double b) {
        return a-b;
    }

    public double mul(double a, double b) {
        return a*b;
    }

    public double div(double a, double b) {

        if(b == 0) {
            System.out.println("can not divided by 0");
            return 0;
        }
        return a/b;
    }
}


public class SimpleCalculator {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Calculator calc = new Calculator(); 

        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        System.out.println("Addition: " + calc.add(num1, num2));
        System.out.println("Subtraction: " + calc.sub(num1, num2));
        System.out.println("Multiplication: " + calc.mul(num1, num2));
        System.out.println("Division: " + calc.div(num1, num2));
    }

}


