        //Question 1

//(1)Declare a variable numberStr and assign it a string value
let numberStr = "42";

//(2)convert numberStr to a number using the Number() function
let theNum = Number(numberStr);

//(3)Display the converted number in the console
console.log("Question 1:", theNum);

        //Question 2

//(1)Declare a variable num and assign it a numerical value
let num = 2023;

//(2)convert num to a string using the String() function.
let theString = String(num);

//(3)Display the converted string in the console.
console.log("Question 2: ", theString);

        //Question 3

//(1)Declare a variable truthyValue and assign it a truthy value
let truthyValue = "Hello";

//(2)Declare a variable falsyValue and assign it a falsy value
let falsyValue = 0;

//(3)convert truthyValue to a boolean using the Boolean() function.
let theTrueValue = Boolean(truthyValue);

//(4)convert falsyValue to a boolean using the Boolean() function
let theFalseValue = Boolean(falsyValue);

//(5)Display the converted boolean values in the console

console.log("Question 3: ",theTrueValue);
console.log("Question 3: ",theFalseValue);

        //Question 4

//(1)Declare a variable currentDate and assign it the current date and time using the new Date() constructor.
let currentDate = new Date();

//(2)Use the getTime() method to convert currentDate to a number representing the number of milliseconds since January 1, 1970 (UNIX epoch time)
let milliseconds = currentDate.getTime();

//(3)Display the converted number in the console
console.log("Question 4: ",milliseconds);

        //Question 5

//(1)Declare a variable eventDate and assign it a specific future date and time using the new Date() constructor
let eventDate = new Date();

//(2)convert eventDate to a localized date and time string
let localizedDateString = eventDate.toLocaleString();

//(3)Display the converted string in the console
console.log("Question 5:",localizedDateString);

         