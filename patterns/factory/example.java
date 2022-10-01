
//create an interface for computer
//it defines similarity situation
public interface Computer {
    void name();
    void since(int year);
}


//I have two different classes with same interface

public class Mac implements Computer {

    @Override
    public void name() {
        System.out.println("Brand is Mac");
    }

    @Override
    public void since(int year) {
        System.out.println("It has bought at " + year);
    }

}


public class Asus implements Computer {

    @Override
    public void name() {
        System.out.println("Brand is Asus");
    }

    @Override
    public void since(int year) {
        System.out.println("It has bought at " +year  );
    }

}

//Now i am creating factory class
//ComputerFactory has only one static method 
//Class takes a type parameter
//its for which class i wanna create
//ComputerFactory doesnt know class but it knows only its a class from Computer Interface 



public class ComputerFactory {
    public static Computer createComputer(Class aClass) throws IllegalAccessException, InstantiationException {
            return (Computer) aClass.newInstance();
    }
}