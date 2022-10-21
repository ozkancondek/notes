// creates vehicle using object literal
const Vehicle1 = {
  manufacturer: "Toyota",
  PlateNO: 12345,
  startEngine() {
    console.log("reving engine");
  },
  drive() {
    console.log("driving car...");
  },
};

// creates new vehicle using object literal
const Vehicle2 = {
  manufacturer: "Ford",
  PlateNO: 13345,
  startEngine() {
    console.log("reving engine");
  },
  drive() {
    console.log("driving car...");
  },
};

// creates factory function

function vehicleFactory(manufacturer, plateNO) {
  return {
    manufacturer,
    plateNO,
    startEngine() {
      console.log("reving engine");
    },
    drive() {
      console.log("driving car...");
    },
  };
}

const Vehicle1New = vehicleFactory("Toyota", 12345);
const Vehicle2New = vehicleFactory("Ford", 13345);

//Imagine a vehicle factory that produces different kinds of vehicles: trucks, cars, buses ambulances, etc.

class Car {
  constructor(options) {
    this.wheels = options.wheels || 4;
    this.doors = options.doors || 4;
    this.color = options.color || "silver";
  }
}
//so i can create new object with new method
let SportOne = new Car({ wheels: 4, doors: 3, color: "red" });
class Truck {
  constructor(options) {
    this.wheels = options.wheels || 6;
    this.doors = options.doors || 2;
    this.color = options.color || "red";
  }
}

class Factory {
  //method

  create = (options, TargetClass) => {
    if (!vehicleType) {
      return "unable to make vehicle. Please specify a vehicle type and tryagain!";
    }

    let vehicle;
    /* 
    if (vehicleType === "car") {
      vehicle = new Car(options);
    } else if (vehicleType === "truck") {
      vehicle = new Truck(options);
    } */
    vehicle = new TargetClass(options);
    //I can add more options

    vehicle.vehicleType = vehicleType; //take vehicleType

    vehicle.startEngine = () => console.log(`Reving ${vehicleType} engine`);

    vehicle.driveVehicle = () => console.log(`Driving ${vehicleType}...`);

    vehicle.stopEngine = () => console.log(`Stop ${vehicleType} engine`);

    return vehicle;
  };
}

const vehicleFactory = new Factory();

//now i can create more easliy wit factory method

const car = vehicleFactory.create(
  {
    wheels: 4,
    doors: 2,
    color: "black",
  },
  Car
);

const truck = vehicleFactory.create(
  {
    wheels: 4,
    doors: 2,
    color: "yellow",
  },
  "truck"
);

//Factory pattern vs Constructors

const vehicleOptions = { type: "cars", color: "white", doors: 4, wheels: 4 };

// factory pattern
function Factory(options) {
  let factory = {};
  factory.type = options.type;
  factory.color = options.color;
  factory.wheels = options.wheels;
  factory.doors = options.doors;

  return factory;
}

const vehicle = Factory(vehicleOptions);

// constructor pattern
function ConstructorPattern(options) {
  this.type = options.type;
  this.color = options.color;
  this.doors = options.doors;
  this.wheels = options.wheels;
}

const vehicle2 = new ConstructorPattern(vehicleOptions);

/*XXXXXXXXXXXXXXXXXXXXXX */
/* However, the difference between both methods is that the factory function above returns a standalone object.
 Which we can use without any effect on the other objects. That is a singleton. 
 Constructors however create objects that have links to their creator. */

const Car = function () {
  let car = {};
  car.driving = false;
  car.toggleEngine = function () {
    this.running = !this.running;
    return this.running;
  };
  return car;
};

car1 = Car(); // running false
car2 = Car(); // running false
car1.toggleEngine(); // running true
car2.toggleEngine = undefined; // to break the code.
car1.toggleEngine(); //running false it is not affected!
