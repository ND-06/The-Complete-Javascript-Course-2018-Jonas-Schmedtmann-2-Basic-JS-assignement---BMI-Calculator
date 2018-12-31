/* We start to define 4 variables to store Mark's Mass, Mark's Height, 
John's Mass & John's Height. */

var markMass, johnMass, markHeight, johnHeight;


markMass = 80;
johnMass = 70;

markHeight = 1.79;
johnHeight = 1.75;

/* We create the good formula to calculate BMI of Mark and John, and we store the result 
in two variables.*/

var bmiMark = markMass / (markHeight*markHeight);
var bmiJohn = johnMass / (johnHeight*johnHeight);

/* We display the result of the BMI for each character via console.log & coercion */

console.log("Mark has a mass of" + " " + markMass + " " + "kg" + " " + "and his height is"
 + " " + markHeight + " Meters" + " " + ": his BMI is " + bmiMark + ".");
 console.log("John has a mass of" + " " + johnMass + " " + "kg" + " " + "and his height is"
 + " " + johnHeight + " Meters" + " " + ": his BMI is " + bmiJohn + ".");  

/* We want to know if Bmi of Mark is higher than Bmi of Mark. For this, we have to 
create a Boolean, and store the result in our new variable called "markHigherBmi" */ 

var markHigherBmi;

markHigherBmi = bmiMark > bmiJohn;

/* We display the result of our famous answer via console.log : Is Mark's Bmi is higher 
than John's Bmi ? And the result of the Boolean is true ! */

console.log("Is Mark's Bmi higher than John's Bmi ? : " + markHigherBmi);
