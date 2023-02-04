// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3
var num2 = 5
var sum = num1 + num2
document.write("The Sum of " + num1  +"and" + num2 + " is" + sum)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var num1 = 3
var num2 = 5
var sub = num1 - num2
document.write("The Subtraction of " + num1  +" and " + num2 + " is " + sub)
var num1 = 3
var num2 = 5
var multiplication = num1 * num2
document.write("The multiplication of " + num1  +" and " + num2 + " is " + multiplication)
var num1 = 3
var num2 = 5
var division = num1 / num2
document.write("The division of " + num1  +" and " + num2 + " is " + division)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value

// MATH EXPRESSIONS | JAVASCRIPT

// Page 2 of 9

// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


var num1 = 8
var num1 = 5
var sum = num1 + 7
document.writeln("Value after variable declaration is : " + num1 + "<br/>" + " initial value is : " +  num1++ + "<br/>" + " Value after increment  is : " + num1 + "<br/>" + " Value after addition is : " + sum +"<br/>" + "Value after decrement  is : " +  --sum );


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
var cost = 600
var noOfTickets = 5
var ruppees = cost*noOfTickets
document.write("Total cost to buy " + noOfTickets+ " tickets to a movie is "+ ruppees + "PKR")



// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var num = 5
document.write("Table of 5 "+ "<br />" + num + " X " + " 1 = " + num*1 + "<br />" + num + " X " + " 2 = " + num*2 + "<br />" + num + " X " + " 3 = " + num*3 + "<br />" + num + " X " + " 4 = " + num*4 + "<br />" + num + " X " + " 5 = " + num*5 + "<br />"+ num + " X " + " 6 = " + num*6 + "<br />" + num + " X " + " 7 = " + num*7 + "<br />" + num + " X " + " 8 = " + num*8 + "<br />" + num + " X " + " 9 = " + num*9 + "<br />" + num + " X " + " 10 = " + num*10 + "<br />" )







// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var c = 18
f= ((c*9/5)+32)
document.write("18c is equal to " +f+"F") 

var f= 65
c= ((f-32)*5/9)
document.write("65F is equals to "+ c +"C")




// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

var product1= 650
var product2= 100
var quantity1= 3
var quantity2= 7
charges = 100
total = (product1*quantity1)+(product2*quantity2)+charges
document.write("Price of item 1 is "+product1 +"<br/>"+"Quantity of item 1 is "+quantity1+"<br/>Price of item 2 is "+product2+"<br/>"+"Quantity of item 2 is "+quantity2+"<br/>"+"Shipping Charges "+charges+"<br/>"+"<br/>"+"<b> Total cost of your order is "+total)




// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var totalMarks= 980
var marksObtained=804
var percentage= marksObtained/totalMarks*100
document.write("<h1>Marks Sheet</h1>"+"<br/>"+"<br/>"+"<br/>"+"Total Marks: "+totalMarks+"<br/>"+ "Marks obtained: "+marksObtained+"<br/>"+"Percentage: "+percentage+"%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var dollar = 10
var riyals = 25
document.write("<h1>Currency in PKR"+"<br/>"+"<br/>"+"<br/>"+"Total currency in PKR: "+(dollar*104.8+riyals*28));



// 10. Write a program to initialize a variable with some
// // number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


var num = 10
document.write((num+5)*10/2);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN years old".

var currentYear= 2023
var birthYear=2004
var age = currentYear-birthYear
document.write("Age Calculator"+"<br/>"+"<br/>"+"<br/>"+"Current Year: "+currentYear+"<br/>"+"Birth Year: "+birthYear+"<br/>"+"Your Age is: "+age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius= 10
var circumference= 2*3.142*radius;
var area = 3.142*10*10;
document.write("<h1>The Geometrizer </h1>"+"<br/>"+"<br/>"+"<br/>"+"Radius of a circle: " +radius+"<br/>"+"The circumference is: "+circumference+"<br/>"+"The area is: "+area);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


var snack= "chocolate chip"
var age = 18
var maxAge= 60
var consumpation = 3
var total = (maxAge-age)*consumpation;
document.write("<h1>The Lifetime Supply Calculator</h1>"+"<br/>"+"<br/>"+"<br/>"+"Favourite Snack: "+ snack+"<br/>"+"Current age: "+ age+"<br/>"+"Estimated Maximum Age: "+ maxAge+"<br/>"+"Amount of snacks per day"+consumpation+"<br/>"+"You will need "+total+" "+snack +" to last you until the ripe old age of "+maxAge );




// __________________________MATH EXPRESSIONS_____________________________//

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:




// 2. What will be the output in variables a, b & result after
// execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is "+a+"<br/>"+"b is "+b+"<br/>"+"result is "+result);
// // Explain the output at each stage:
// --a; here pre decrement is done making a's value from 2 to 1
// --a - --b;  then this preDecrement of a is subtracting from the pre decrement of b which is in this case 0
// --a - --b + ++b; then adding the preincrement of b which is now 1
// --a - --b + ++b + b--; in the last by adding post decrement b we get 3 

// 3. Write a program that takes input a name from user &
// greet the user.
var name = prompt("Enter your good name","Username");
alert("WELCOME TO THE SITE; "+name);