import java.util.*;

class Student {
    String name;
    int mark1, mark2, mark3, mark4,mark5;

    public int totalMarks() {
        return mark1+mark2+mark3+mark4+mark5;
    }

    public double avgMarks() {
        return totalMarks()/5.0;
    }
}

public class StudentReport {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student stu = new Student();

        System.out.print("Enter the name of student: ");
        // String n = sc.nextLine();
        stu.name = sc.next(); 

        System.out.print("Enter marks of 1st subject: ");
        stu.mark1 = sc.nextInt();

        System.out.print("Enter marks of 2nd subject: ");
        stu.mark2 = sc.nextInt();

        System.out.print("Enter marks of 3rd subject: ");
        stu.mark3 = sc.nextInt();

        System.out.print("Enter marks of 4th subject: ");
        stu.mark4 = sc.nextInt();

        System.out.print("Enter marks of 5th subject: ");
        stu.mark5 = sc.nextInt();

        System.out.println("\nStudent Name: " + stu.name);
        System.out.println("Total Marks: " + stu.totalMarks());
        System.out.println("Average Marks: " + stu.avgMarks());



    }
}
