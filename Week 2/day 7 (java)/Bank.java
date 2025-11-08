import java.util.*;

class BankAccount{
    int accountNumber;
    String holderName;
    double balance;

    public BankAccount(int accNo, String n, double bal) {
        accountNumber = accNo;
        holderName = n;
        balance = bal;
    }

    public void displayDetails() {
        System.out.println("\nDetails:");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Holder Name: " + holderName);
        System.out.println("Balance: " + balance);
    }


}

public class Bank {

    public static void main(String[] args) {
        BankAccount obj1 = new BankAccount(101, "Muskan Choudhary", 5000);
        obj1.displayDetails();


        Scanner sc = new Scanner(System.in);

        System.out.println("\nEnter Account Number: ");
        int accNo = sc.nextInt();
        sc.nextLine();

        System.out.println("Enter Holder Name: ");
        String name = sc.nextLine();

        System.out.println("Enter Initial Balance: ");
        double bal = sc.nextDouble();

        
        BankAccount obj2 = new BankAccount(accNo, name, bal);

        obj2.displayDetails();

    }
    
}
