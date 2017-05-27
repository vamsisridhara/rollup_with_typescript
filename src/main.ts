import { EvenNumbers } from './underscore_test';
import { Person } from './person';
import { JqueryTestNumbers } from './jquery_test';

console.log(" use of Typescript with webpack ");
console.log(`Person first name is: ${Person.firstName}, last name is ${Person.lastName} `);

console.log("invoking underscore js -- third party library ")
let evn: EvenNumbers = new EvenNumbers();
console.log(evn.filterdata());
console.log(evn.pluckData());

// console.log("invoking jquery--third party library  ");
// let jqueryTest = new JqueryTestNumbers();
// console.log(jqueryTest.getObjectArray());