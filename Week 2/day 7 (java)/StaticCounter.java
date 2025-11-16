import java.util.*;

class Counter {
    static int count = 0;

    public Counter() {
        count++;
    }
}

public class StaticCounter {
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        System.out.println("Total object created: " + Counter.count);
    }
}
