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