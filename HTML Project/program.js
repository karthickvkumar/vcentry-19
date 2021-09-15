// TO create Temporaty storage ( Variable )

// Syntax -> var variable_name = value;
// variable_name -> Any reasonable text value, a-z, A-Z, 0-9, $, _

// Number -> Any numerical value from Positive, Negative, Decimal, Fractional
var user_age = 24;
console.log(user_age);

//string -> Any value which is typed inside dobule quotes " " or single quotes ' '
var user_name = "karthick kumar";
console.log(user_name);

// Boolean -> true or false
var result = false;
console.log(result)

/* object -> Collection of Key - Value pair.
var variable_name = value;
value -> {
  first_name : 'sfdfsd',
  last_name : 'sdsdsd',
  age : 23
}
*/

var student_Information = {
  name : 'karthick',
  name : 'karthick',
  age : 27,
  roll_no : 47589,
  result : true 
};

console.log(student_Information);

/*Operations in Object (4) 
  1. To read a value from Object
  2. To edit a value from Object
  3. To add new value to Object 
  4. To delete a particular value from Object 
*/

//To read a value from Object -> object_variable_name.key
console.log(student_Information.name);
console.log(student_Information.roll_no);

//To edit a value from Object -> object_variable_name.key = value;
student_Information.name = "Yuvi";
console.log(student_Information);

//To add new value to Object -> object_variable_name.NewKey = value;
student_Information.mobile_number = 124563555;
student_Information.grade = "A+";
console.log(student_Information);

//To delete a particular value from Object -> delete object_variable_name.key;
delete student_Information.result;
console.log(student_Information);

// Array
// Syntax - var array_variable_name = [value1, value2, value3,...,valueN ];
var record_list = [
  {
    name: 'xpshj',
    age: 45
  },
  {
    name: 'sfsd',
    age: 78
  },
  {
    name : 'erter',
    age : 45
  }
];

/*Operations in Array (4) 
  1. To read a value from Array
  2. To edit a value from Array
  3. To add new value to Array 
  4. To delete a particular value from Array 
*/

// To read a value from Array - array_variable_name[index];
console.log(record_list[0].name)

// To edit a value from Array - array_variable_name[index] = value;
record_list[0].name = "karthick";
console.log(record_list)

/* To add new value to Array-> 
  1. array_variable_name.push(value);  --> Insert last in array
  2. array_variable_name.unshift(value); --> Insert first in array
*/
record_list.unshift({ name : "Yuvi", age : 30});
record_list.push({ name : "kumar", age : 27});

//To delete a particular value from Array  -> array_variable_name.splice(index, deleteCount);
record_list.splice(2, 1);

/*
Function -> Block of code 
Syntax : (Function Definition)

function function_name(var_name_1, var_name_2, ... var_name_N){  // argument
  // Code Block
};

function_name -> Proper text value -> a-z, A-Z, 0-9, $, _

To Run/Execute a Function :
Syntax : (Function Call/ Function Invocation)

function_name(value1, value2, ... valueN); //parameter

*/

function on_addition(){
  var number_1 = prompt("Enter Number 1 value");
  var value_1 = parseInt(number_1);
  var number_2 = prompt("Enter Number 2 value");
  var value_2 = parseInt(number_2);
  var result = value_1 + value_2;
  console.log(result);
};

function on_login(){
  var name = prompt("Please enter a valid username");
  console.log("The username is ", name);
}

/*
Operators 
 1. Arithmetic Operator --> +, -, *, **, /, %, ++, --
 2. Assignment Operator --> = 
 3. Comprasion Operator --> ==, ===, <, <=, >, >=, !=, !==
 4. Logical Operator --> &&, ||, ! (AND, OR, NOT)
 

 Syntax : IF-ELSE
 if(condition){
   // Code block 1
 }
 else{
   // Code block 2
 }

 Problem : Check whether given age is eligible for Voting
 1. Read number value, during program execution (prompt)
 2. Condition : Age should be greater than or equal to 18
 3. If age is greater then 18, print Eligible for Vote
 4. If age is less then 18, print Not Eligible for Vote
 */

 function check_voting_age(){
   var value = prompt('Enter a user age...');
   var age = parseInt(value);
   
   if(age >= 18){
      console.log("Eligible for Vote");
   }
   else{
     console.log("Not Eligible for Vote");
   }

 }

 /*
Syntax - Multiple IF-ELSE
if(condition 1){
  // code block 1
}
else if(condition 2){
   // code block 2
}
else{
   // code block 3
}

Problem : Check the age category of a person
1. Read number value, during program execution (prompt)
2. If age is less than 18, Print The user is Minor
3. If age is greater than or equal to 18 and age is less than 60, print Major
4. If age is greater than 60, print super citizen
*/

function check_age_category(){
  var value = prompt('Enter a user age');
  var age = parseInt(value);

  if(age < 18){
    console.log("The user is Minor");
  }
  else if(age >= 18 && age < 60){
    console.log("The user is Major");
  }
  else{
    console.log("The user is Super Citizen");
  }

}