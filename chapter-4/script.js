//The sum of a range
/*var numbers = [];

//This uses the reduce function and essentially adds each item in the
//numbers array into one big number!
var sum = function(start_range,end_range) {
    var add = function(a,b) {
        return a + b;
    }
    // this should put first and second number in the numbers array.
    range(start_range,end_range);
    // and now this should reduce that array into one number.
    var sum_of_all_numbers = numbers.reduce(add, 0);
    //this will log that number to give the sum of all the numbers in numbers.
    console.log("The sum of all those numbers is " + sum_of_all_numbers + "!");
}


//I don't know if there is a sum function but I created one for this exercise.
var range = function(first_number, second_number) {
    if (first_number > second_number) {
        for (i = second_number; i <= first_number; i++) {
            numbers.push(i);
        }
    } else {
        for (i = first_number; i <= second_number; i++) {
            numbers.push(i);
        }
    }
}

range(30,60);
console.log(numbers);

sum(30,60);
*/

//REVERSING AN ARRAY 
/*
sample_array = ["Nick","Cat","Steve","Burl Megaman","Kevin","Hrant"]
reverse_array = [];
reverse_array_in_place = [];


//this function will reverse a specific array put into it.

var reverseArray = function(arguments) {
    for (i = arguments.length - 1; i >= 0; i--) {
        reverse_array.push(arguments[i]);
    }
}

//this function will reverese any specified array.
var reverseArrayInPlace = function(array) {
    for (i = array.length - 1; i >= 0; i--) {
        reverse_array_in_place.push(array[i]);
    }
}

//these are the outputs and proof that the two functions do what they are suppose to.
reverseArray([1,3,4,"Nick",5, "Cat", false, 20]);
reverseArrayInPlace(sample_array);
console.log(reverse_array_in_place);
console.log(reverse_array);
*/
