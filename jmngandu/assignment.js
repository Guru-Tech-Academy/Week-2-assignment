         //Question 1: Convert to Number Explicitly (15 points)

//(1)  Declare a variable numberStr and assign it a string value
var numberStr = "42";

//(2)Use explicit type conversion to convert numberStr to a number using the Number() function
var theNum = Number(numberStr);

//(3) Step 3: Display the converted number in the console
console.log("Question 1:", theNum);

      //Question 2: Convert to String Explicitly (15 points)

//(1)Declare a variable num and assign it a numerical value, e.g., 2023.
var num = 2023;

//(2)Use explicit type conversion to convert num to a string using the String() function.
var theString = String(num);

//(3)Display the converted string in the console.
console.log("Question 2: ", theString);

     //Question 3: Convert to Boolean Explicitly (15 points)

//(1)Declare a variable truthyValue and assign it a truthy value, e.g., "Hello"
var truthyValue = "Hello";

//(2)Declare a variable falsyValue and assign it a falsy value, e.g., 0
var falsyValue = 0;

//(3)Use explicit type conversion to convert truthyValue to a boolean using the Boolean() function.
var theTrueValue = Boolean(truthyValue);

//(4)Use explicit type conversion to convert falsyValue to a boolean using the Boolean() function
var theFalseValue = Boolean(falsyValue);

//(5)Display the converted boolean values in the console.

console.log(theTrueValue);
console.log(theFalseValue);

         //Question 4: Convert JavaScript Dates to Numbers (20 points)

//(1)Declare a variable currentDate and assign it the current date and time using the new Date() constructor.
var currentDate = new Date();

//(2)Use the getTime() method to convert currentDate to a number representing the number of milliseconds since January 1, 1970 (UNIX epoch time)
var milliseconds = currentDate.getTime();

//(3)Display the converted number in the console
console.log(milliseconds)

         