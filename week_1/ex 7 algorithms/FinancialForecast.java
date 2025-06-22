public class FinancialForecast {

    
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        } else {
            return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
        }
    }

    
    public static double calculateFutureValueIterative(double presentValue, double growthRate, int years) {
        double futureValue = presentValue;
        for (int i = 0; i < years; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }

    public static void main(String[] args) {
        double presentValue = 10000;  
        double growthRate = 0.05;     
        int years = 10;               

        
        double futureValueRecursive = calculateFutureValue(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years (Recursive): %.2f%n", years, futureValueRecursive);

     
        double futureValueIterative = calculateFutureValueIterative(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years (Iterative): %.2f%n", years, futureValueIterative);
    }
}
