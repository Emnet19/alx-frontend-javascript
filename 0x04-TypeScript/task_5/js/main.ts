// Define MajorCredits with a unique brand
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define MinorCredits with a unique brand
export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major'
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor'
  };
}

// Example usage (optional)
const major1: MajorCredits = { credits: 5, brand: 'major' };
const major2: MajorCredits = { credits: 10, brand: 'major' };
const totalMajor = sumMajorCredits(major1, major2);
console.log(totalMajor); // { credits: 15, brand: 'major' }

const minor1: MinorCredits = { credits: 3, brand: 'minor' };
const minor2: MinorCredits = { credits: 7, brand: 'minor' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log(totalMinor); // { credits: 10, brand: 'minor' }
