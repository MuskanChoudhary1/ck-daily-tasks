package Constructor;

class Book {
    String title;
    String author;
    double price;

    public Book(String t, String a, double p) {
        title = t;
        author = a;
        price = p;
    }

    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: " + price);
    }
}

public class BookDemo {
    public static void main(String[] args) {
        Book book1 = new Book("Java Basics", "Alexa", 10.99);
        Book book2 = new Book("DSA", "Muskan", 8.99);

        book1.displayInfo();
        System.out.println();
        book2.displayInfo();
    }
    
}
