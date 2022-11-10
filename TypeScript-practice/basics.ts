//Primitives

let age: number;
age = 34;

let userName: string;
userName = "Stefan";
let familyName: string = "Petrov";

let isInstructor: boolean;
isInstructor = false;

// More complex types

//Array
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
//  The array must be exactly in the same structure

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
