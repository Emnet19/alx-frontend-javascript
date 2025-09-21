
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  yearsOfExperience: 3,
  contract: true,
  subject: "Mathematics"
};

teacher1.fullTimeEmployee = false;
teacher1.location = "Bahir Dar";
teacher1.email = "alice.smith@example.com";

console.log(teacher1);

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Bahir Dar",
  numberOfReports: 10
};

console.log(director1);

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("500"));

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Alice", "Smith"));

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.workOnHomework());
console.log(student.displayName());
