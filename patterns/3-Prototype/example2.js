//Lets say we want to create many dogs

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

//Notice here how the constructor contains a name property,
// and the class itself contains a bark property.
//When using ES6 classes, all properties that are defined on the class itself, bark in this case,
//are automatically added to the prototype.

/* Since all instances have access to the prototype, 
it's easy to add properties to the prototype even after creating the instances. */

Dog.prototype.play = () => console.log("Playing now!");

/* Let's create another type of dog, a super dog! This dog should inherit everything from 
a normal Dog, but it should also be able to fly. We can create a super dog by extending 
the Dog class and adding a fly method. */

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "Flying!";
  }
}

//Let's create a flying dog called Daisy, and let her bark and fly!

const dog4 = new SuperDog("Daisy");

//Object.create meethod

const dog = {
  bark() {
    console.log(`Woof!`);
  },
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));
