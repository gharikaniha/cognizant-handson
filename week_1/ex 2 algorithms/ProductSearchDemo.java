import java.util.*;

public class ProductSearchDemo {

    public static class Product {
        private int productId;
        private String productName;
        private String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public int getProductId() { return productId; }
        public String getProductName() { return productName; }
        public String getCategory() { return category; }

        @Override
        public String toString() {
            return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
        }
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].getProductId() == targetId) {
                return products[mid];
            } else if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shoes", "Footwear"),
            new Product(302, "Washing Machine", "Appliances"),
            new Product(150, "Smartphone", "Electronics")
        };

        // Sort products before binary search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Product ID to search: ");
        int targetId = scanner.nextInt();

        System.out.println("Searching using Linear Search...");
        Product foundLinear = linearSearch(products, targetId);
        if (foundLinear != null) {
            System.out.println("Product Found (Linear): " + foundLinear);
        } else {
            System.out.println("Product not found using Linear Search.");
        }

        System.out.println("\nSearching using Binary Search...");
        Product foundBinary = binarySearch(products, targetId);
        if (foundBinary != null) {
            System.out.println("Product Found (Binary): " + foundBinary);
        } else {
            System.out.println("Product not found using Binary Search.");
        }
    }
}
