package com.company;

import java.util.Scanner;

public class Main {

    public static int factorial(int number) {
        int total = 1;
        for (int i = 1; i <= number; i++) {
            total *= i;
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int factorialInput = Integer.parseInt(scanner.next());
        System.out.println(factorial(factorialInput));
    }
}
