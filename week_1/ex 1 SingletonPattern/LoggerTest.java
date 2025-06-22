public class LoggerTest {
    public static void main(String[] args) {
        Logger loggerA = Logger.getInstance();
        loggerA.log("Starting application...");

        Logger loggerB = Logger.getInstance();
        loggerB.log("Processing data...");

        if (loggerA == loggerB) {
            System.out.println("Confirmed: Only one Logger instance exists.");
        } else {
            System.out.println("Error: Multiple Logger instances exist!");
        }
    }
}

