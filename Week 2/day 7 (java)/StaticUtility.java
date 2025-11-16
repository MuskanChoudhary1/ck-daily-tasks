class MathUtils {

    public static int max(int a, int b) {
        return (a>b) ? a:b;
    }

    public static int min(int a, int b) {
        return (a<b) ? a:b;
    }

    public static int avg(int a, int b) {
        return (a+b)/2;
    }


}

public class StaticUtility {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;
        
        System.out.println("Max: " + MathUtils.max(num1, num2));
        System.out.println("Min: " + MathUtils.min(num1, num2));
        System.out.println("Avg: " + MathUtils.avg(num1, num2));
    }
    
}
