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
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Alice", "Smith")); // A. Smith


