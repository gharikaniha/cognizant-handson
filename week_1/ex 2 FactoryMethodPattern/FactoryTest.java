public class FactoryTest {

    
    interface Doc {
        void open();
    }

    
    static class WordDoc implements Doc {
        public void open() {
            System.out.println("Opening Word Document...");
        }
    }

   
    static class PdfDoc implements Doc {
        public void open() {
            System.out.println("Opening PDF Document...");
        }
    }

    
    static class ExcelDoc implements Doc {
        public void open() {
            System.out.println("Opening Excel Document...");
        }
    }

    abstract static class DocFactory {
        public abstract Doc createDoc();
    }

 
    static class WordDocFactory extends DocFactory {
        public Doc createDoc() {
            return new WordDoc();
        }
    }


    static class PdfDocFactory extends DocFactory {
        public Doc createDoc() {
            return new PdfDoc();
        }
    }

    // ExcelDocFactory
    static class ExcelDocFactory extends DocFactory {
        public Doc createDoc() {
            return new ExcelDoc();
        }
    }

    // Main method
    public static void main(String[] args) {
        DocFactory wordFactory = new WordDocFactory();
        Doc word = wordFactory.createDoc();
        word.open();

        DocFactory pdfFactory = new PdfDocFactory();
        Doc pdf = pdfFactory.createDoc();
        pdf.open();

        DocFactory excelFactory = new ExcelDocFactory();
        Doc excel = excelFactory.createDoc();
        excel.open();
    }
}
