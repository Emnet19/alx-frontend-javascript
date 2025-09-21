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
