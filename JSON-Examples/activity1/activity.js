
var json = {
    "students" : [
        {
            "name" : "Fred",
            "grade" : 87
        },
        {
            "name" : "Barney",
            "grade" : 92
        }
    ]
}

console.log("original json",json);

/*
console.log("using for-each:")
for (var i = 0; i < json.students.length; i++) {
    console.log(json.students[i].name);
    console.log(json.students[i].grade);
}
*/

console.log("using forEach:")
json.students.forEach(function (item, index) {
    console.log(item);
    console.log(item.name);
    console.log(item.grade);
  });

console.log("end json", json);

