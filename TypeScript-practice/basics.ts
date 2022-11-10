//Primitives

let age: number;
age = 34;

let userName: string;
userName = "Stefan";
let familyName: string = "Petrov";

let isInstructor: boolean;
isInstructor = false;

// More complex types

// Array
let hobbies: string[];
hobbies = ["Sports", "Travel"];

// Object
let person: {
  name: string;
  age: number;
};

person = {
  name: "Stefan",
  age: 34,
};

// Array of objects
///  The array must be exactly in the same structure

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React course";
course = 23;

// Union types

let courseName: string | number = "React course";
courseName = 22;

// Type Aliases

/// example 1
type Employe = {
  name: string;
  age: number;
};

let firstEmploye: Employe;

firstEmploye = {
  name: "Stefan",
  age: 34,
};

/// example 2
let listOfEmployes: Employe[];

listOfEmployes = [
  {
    name: "Stefan",
    age: 34,
  },
];

// Functions & types

function addNumebers(a: number, b: number) {
  return a + b;
}

function addNumebers2(a: number, b: number): number {
  return a + b;
}
function addNumebers3(a: number, b: number): number | string {
  return a + b;
}

/// void type for functions, it will return undefined
function printValue(value: any) {
  console.log(value);
}

// Generics
/// "T" means type

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

insertAtBeginning(demoArray, "3");
insertAtBeginning(demoArray, 3);

