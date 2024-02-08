
//create a string representing a JSON Structure
var jsonStr = '{ "name" : "Jamie", "age": 99, "occupation" : "instructor" }';

//turn that string into a JSON object
var person = JSON.parse(jsonStr);

//objects don't have a length property, but we can use the following to iterate:
//shortened syntax:

for (let x in person) {
  console.log(x + ": "+ person[x])
}
