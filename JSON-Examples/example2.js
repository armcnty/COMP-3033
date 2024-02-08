
const array = ["one", "two", "three", "four", "five", "six"];

console.log("using a pure old fashioned for-loop!");

for (var index = 0; index < array.length; index++) {
    console.log(array[index],index);
}


// 'forEach': https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

console.log("using forEach!")

array.forEach(function (item, index) {
  console.log(item, index);
});





