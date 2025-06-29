package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTestWithSetup {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println(">>> Setup complete");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println(">>> Teardown complete");
    }

    @Test
    public void testAddition() {
        int result = calculator.add(3, 7);
        assertEquals(10, result);
    }

    @Test
    public void testMultiplication() {
        int result = calculator.multiply(5, 4);
        assertEquals(20, result);
    }
}
