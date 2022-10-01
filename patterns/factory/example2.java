//Define an Interface and create two different classes from it
interface ICar{  
    String getColor();
    double getPrice();
}
class BMW implements ICar{
    
    //Which features I have in that car ? 
    private String color;
    private double price;
    
    public BMW(String color, double price){
        this.color = color;
        this.price = price;
    }
    //Methods in ICar interface  have overrites
    //You can reach to objects with thoose methods
    @Override
    public String getColor() {
        return color;
    }

    @Override
    public double getPrice() {
        return price;
    }

   
}

class Audi implements ICar{
    private String color;
    private double price;
    
    public Audi(String color, double price){
        this.color = color;
        this.price = price;
    }
    
    @Override
    public String getColor() {
        return color;
    }
    
    
    public double getPrice() {
        return price;
    }
}

//Now lets create a factory after defining an interface 
//in this class its gonna be a static method  same with interface
//and object creation occurs in this method


class CarFactory{ //Factory Class
    
    //Factory Method :
    public static ICar createCar(String mark, String color, double price){
        
        ICar car;
        
        if(mark.equals("BMW")){
            car = new BMW(color, price);
        }
        else if(mark.equals("Audi")){
            car = new Audi(color, price);
        }
        else{
            throw new RuntimeException(mark+" not supported for production.");
        }
        return car;
    }
}


///Full example 

//define Interface 

interface ICar{  
    String getColor();
    double getPrice();
    int modelYear();
    boolean backupCamera();
    void showCarInfo();
    
}
class BMW implements ICar{
    
     //Which features i have in car 
    private String color;
    private double price;
    private int modelYear;
    private boolean backupCamera;
    
    public BMW(String color, double price, int modelYear, boolean backupCamera){
        this.color = color;
        this.price = price;
        this.modelYear = modelYear;
        this.backupCamera = backupCamera;
    }
    // override methods
 
    @Override
    public String getColor() {
        return color;
    }

    @Override
    public double getPrice() {
        return price;
    }

    @Override
    public int modelYear() {
        return modelYear;
    }

    @Override
    public boolean backupCamera() {
        return backupCamera;
    }

    @Override
    public void showCarInfo() {
        System.out.println("Brand is: BMW");
        System.out.println("Car price: "+price);
        System.out.println("Car year: "+modelYear);
        
        if(backupCamera){
            System.out.println("Backup Camera : exist");
        }
        else{
            System.out.println("Backup Camera : not");
        }
    }

   
}
class Audi implements ICar{
    private String color;
    private double price;
    private int modelYear;
    private boolean backupCamera;
    
    public Audi(String color, double price, int modelYear, boolean backupCamera){
        this.color = color;
        this.price = price;
        this.modelYear = modelYear;
        this.backupCamera = backupCamera;
    }
    
    @Override
    public String getColor() {
        return color;
    }
    
    
    public double getPrice() {
        return price;
    }

    @Override
    public int modelYear() {
        return modelYear;
    }

    @Override
    public boolean backupCamera() {
        return backupCamera;
    }

    @Override
    public void showCarInfo() {
        System.out.println("Car brand: Audi");
        System.out.println("Car price : "+price);
        System.out.println("Car year: "+modelYear);
        
        if(backupCamera){
            System.out.println("Backup Camera : exist");
        }
        else{
            System.out.println("Backup Camera : not");
        }
    }
}

//Factory Class 

class CarFactory{  
    
    //Factory Method, 
    public static ICar createCar(String mark, String color, double price, int modelYear, boolean backupCamera){
        
        ICar car;
        if(mark.equals("BMW")){
            car = new BMW(color, price, modelYear, backupCamera);
        }
        else if(mark.equals("Audi")){
            car = new Audi(color, price, modelYear, backupCamera);
        }
        else{
            throw new RuntimeException(mark+"production not supported");
        }
        return car;
    }
}
public class Main{
    public static void main(String[] args) throws IllegalAccessException, InstantiationException {
        
        ICar bmw = CarFactory.createCar("BMW", "black", 240000, 2016, true);
        ICar audi = CarFactory.createCar("Audi", "White", 194000, 2018, false);
        
        bmw.showCarInfo();
        System.out.println("");
        audi.showCarInfo();
    }
}

