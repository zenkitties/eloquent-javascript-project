//The minimum exercise from chapter 3
/*
var min = function(number_one, number_two) {
    return Math.min(number_one, number_two)
}

console.log(min(20,40));
console.log(min(2,20096));
*/

//Recursion looping
/*
var test_number = parseInt(prompt('what number would you like to look at for its even or odd-ness?')); 

var isEven = function(num) {
    if (num === 0) {
        console.log(num + " is Even.");
    } else if( num === 1) {
        console.log(num + " is Odd.");
    } else {
        if (num % 2 === 0) {
            console.log(num + " is Even.");
        } else {
            console.log(num + " is Odd.");
        }   
    }
} 

isEven(test_number);
*/

//the bean counting function
var counter = 0;
var count = 0;

var countBs = function(word) {
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) === "B") {
            counter += 1
        }
    }
}

countBs("Brisk Buttons Bought with Baloons")
console.log("There are " + counter + " Bs in that string");

// This is the more versatile char counting function
var countChar = function(word, letter) {
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            count += 1
        }
    }
}

countChar("kakkarot", "k") //this calls the count char function with a word and letter to look for
console.log(count); //after the function has completed its duties, it displays how many there are in that string


