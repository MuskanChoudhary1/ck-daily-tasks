package Constructor;

class Car {
    String model;
    Double price;

    public Car (String m)
    {
        model = m;
    }

    public Car (String m, Double p)
    {
        model = m;
        price = p;
    }

    void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Price: " + price);
    }
}

public class CarDemo {
    public static void main(String[] args) {
        Car car1 = new Car("BMW");
        Car car2 = new Car("Audi", 55000.0);

        car1.displayInfo();
        System.out.println();
        car2.displayInfo();
    }
    
}
