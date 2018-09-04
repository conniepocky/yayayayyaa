
import java.util.Scanner;

public class name {
    public static void main(String[] args) {

        Scanner reader = new Scanner(System.in);

        System.out.println("Whats your name?");

        String name = reader.next();

        reader.close();
    }
}