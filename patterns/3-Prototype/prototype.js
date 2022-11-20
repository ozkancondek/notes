class Employee {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = function () {
      return age > 60 ? "retired" : "not retired";
    };
  }
}

//new instance
const employee1 = new Employee("ozkan", "condek", 52);

//if i try to produce many instances, for every of it i have to open a place in memory
//For employee1 instance, coming methods. Problem is for 10 different instance its comes same methods. method X Instance
//Maybe for next instance i dont need method1 but its still coming

//Solution with prototype

class Questions {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    this.sum = "";
  }
}

Questions.prototype.SumOfNumbers = () => {
  this.sum = this.number1 + this.number2;

  return this.sum;
};

Questions.prototype.ControlEvenOdd = () => {
  return this.sum % 2 == 0 ? "even number" : "odd number";
};

/* const question1 = new Questions(4, 5);

const checkSum = question1.SumOfNumbers();
const checkEvenOdd = question1.ControlEvenOdd();

const question2 = new Questions(4, 5);
console.log(question2);
 */
//not in every call. Reference stays in memory and only comes when its needed
//There is no copy of prototypes in memory there is ob´nly reference and comes when its needed
