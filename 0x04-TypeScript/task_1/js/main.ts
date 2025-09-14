

interface Teacher {
  readonly firstName: string; // only modifiable on initialization
  readonly lastName: string;  // only modifiable on initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined

 
  [key: string]: any;
}

// Create a Teacher object
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  yearsOfExperience: 3,
  contract: true,  // extra attribute
  subject: "Mathematics" // another extra attribute
};



// Modify allowed properties
teacher1.fullTimeEmployee = false;
teacher1.location = "Bahir Dar";

// Add more extra attributes dynamically
teacher1.email = "alice.smith@example.com";

console.log(teacher1);


// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required attribute
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  numberOfReports: 10,  // required
  department: "Engineering" // extra attribute
};

console.log(director1);

// task_1/js/main.ts

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Alice", "Smith")); // A. Smith


interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class methods
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentInterface {
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

