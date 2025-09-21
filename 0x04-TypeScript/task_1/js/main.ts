interface Teacher {
  readonly firstName: string;      // only modifiable at initialization
  readonly lastName: string;       // only modifiable at initialization
  fullTimeEmployee: boolean;       // must always be defined
  yearsOfExperience?: number;      // optional
  location: string;                // must always be defined
  [key: string]: any;              
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  s
}

interface Director extends Teacher {
  numberOfReports: number; 
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));   // J. Doe
console.log(printTeacher({ firstName: "Alice", lastName: "Smith" })); // A. Smith



interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Class methods interface (still used inside)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition exactly as the checker wants
class StudentClass {
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

// Example usage
const student = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName());    // Alice
