

// N1
// *****************************************
// FUNCTION SHOULD RETURN AN OPPOSITE OF
// GIVEN NUMBER

// SOLUTION
// function opposite(number) {
//     let result;
//     // define is the number positive or negative
//     if (!isNaN(Math.sign(number))) { 
//       result = number * (-1);
//     }
//     return result;
// }
// ------------------------------
// function opposite2(number) {
//     return number * (-1);
// }


// N2
// *****************************************
// FUNCTION SHOULD RETURN 'Hello boss' IF NAME EQUALS TO OWNER
// otherwise return 'Hello guest'

// function greet(name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
// }

// N3
// Given a set of numbers, return the additive 
// inverse of each. Each positive becomes negatives, 
// and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// SOLUTION
// function invert(array) {
//     return array.map(num => num * -1);
// }
// invert([1, -2, 3, 40, 5])


// N4
// *****************************************
// A hero is on his way to the castle to complete his 
// mission. However, he's been told that the castle 
// is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero 
// has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number 
// of bullets and move forward to fight another 
// specific given number of dragons, will he survive?

// SOLUTION
// function hero(bullets, dragons) {
//     return bullets >= dragons * 2;
// }
// hero(4, 2)
// ------------------------------
// function hero(bullets, dragons) {
//     if (bullets/2 >= dragons) {
//         return true;
//     }
//     return false;
// }


// N5
// *****************************************
// Build a function that returns an array of integers 
// from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// SOLUTION
// const reverseSeq = (n) => {
//     let result = [];
//     for (let i = n; i > 0; i--) {
//         result.push(i)
//     }
//     return result;
// }
// reverseSeq(5)
// I DID THIS ↑ MYSELF 😎


// N6
// *****************************************
// Make a simple function called greet that 
// returns the most-famous "hello world!".ay","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// SOLUTION
// function greet() {
//     return 'hello world!'
// }
// 😂


// N7
// *****************************************
// It's pretty straightforward. Your goal is to 
// create a function that removes the first and 
// last characters of a string. You're given one 
// parameter, the original string. You don't have 
// to worry with strings with less than two characters.

// SOLUTION
// function removeChar(str) {
//      return str.slice(1, -1)
// }
// console.log(removeChar('hello'));


// N8
// *****************************************
// Given an array of integers.
// Return an array, where the first element is 
// the count of positives numbers and the second 
// element is sum of negative numbers. 0 is 
// neither positive nor negative.

// If the input is an empty array or is null, 
// return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
//             -11, -12, -13, -14, -15]
// you should return [10, -65].

// SOLUTION
// function countPositivesSumNegatives(input) {
//     if (!input || !input.length) return [];

//     let positive = input.filter(x => x > 0)
//     let negative = input.filter(x => x <= 0)
//     let negNumSum = 0;
//     for (let i = 0; i < negative.length; i++) {
//         negNumSum += negative[i]
//     }

//     console.log([positive.length, negNumSum])
// }

// console.log(countPositivesSumNegatives(
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
//         -11, -12, -13, -14, -15]
// ));


// N9
// // *****************************************
// Sentence Smash
// Write a function that takes an array of words 
// and smashes them together into a sentence and 
// returns the sentence. You can ignore any need 
// to sanitize words or add punctuation, but you 
// should add spaces between each word. Be 
// careful, there shouldn't be a space at the 
// beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  
//      =>  'hello world this is great'

// SOLUTION
// function smash(words) {
//     const sentence = words.join(' ');
//     return sentence;
// };

// console.log(smash(['hello', 'world', 'this', 'is', 'great']))



// N10
// *****************************************
// Consider an array/list of sheep where some 
// sheep may be missing from their place. We need
// a function that counts the number of sheep present 
// in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like
// null/undefined

// SOLUTION
// function countSheeps(arrayOfSheep) {
//     const countSheep = arrayOfSheep.filter(sheep => {
//         if(sheep) {
//             return true
//         }
//     }).length;
//     return `${countSheep} sheeps are present`;
// }

// The Better Way
// function countSheeps(arr) {
//     return arr.filter(Boolean).length;
// }

// console.log(countSheeps(
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
// ))


// N11
// *****************************************
// Write a function which converts the input 
// string to uppercase.

// SOLUTION
// function makeUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(makeUpperCase('hello'))

// Shorter Way
// const makeUpperCase = str => str.toUpperCase();


// N12
// *****************************************
// This kata is about multiplying a given number
//  by eight if it is an even number 
// and by nine otherwise.

// SOLUTION
// function myFunc(number) {
//     return number % 2 == 0 ? number * 8 : number * 9;
// }
// console.log(myFunc(8));


// N13
// *****************************************
// You are given the length and width of a 4-sided polygon. 
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a 
// rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you 
// will assume that it is a square if its 
// length and width are equal, otherwise it is a rectangle.

// SOLUTION
// function areaOfPerimeter(l, w) {
//     return l === w ? l * w : (l + w) * 2;
// }
// console.log(areaOfPerimeter(6, 10))


// N14
// *****************************************
// Implement a function which convert the given 
// boolean value into its string representation.

// Note: Only valid inputs will be given.

// SOLUTION
// const boolToStr = b => b === true ? 'true' : 'false';
// function boolToStr(b) {return b === true ? 'true' : 'false';}
// console.log(boolToStr(true));

// Better Way
// function booleanToString(b) {
//     return b.toString();
// };


// N15
// *****************************************
// Write function bmi that calculates body 
// mass index (bmi = weight / height2).
// bmi - stands for: Body Mass Index

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// SOLUTION
// function bmi(weight, height) {
//     const sum = weight / (height * height);
//     const sum = weight / Math.pow(height, 2);

//     if (sum <= 18.5) {
//         return 'Underweight'
//     } else if (sum <= 25.0) {
//         return 'Normal'
//     } else if (sum <= 30.0) {
//         return 'Overweight'
//     } else {
//         return 'Obese'
//     }
// }
// console.log(bmi(80, 1.80));


// N16
// *****************************************
// Complete the square sum function so that 
// it squares each number passed into it 
// and then sums the results together.

// For example, for [1, 2, 2] it should 
// return 9 because 1^2 + 2^2 + 2^2 = 9.

// SOLUTION
// function squareSum(numbers) {
//     let res = 0;
//     numbers.forEach(number => {
//         res += (number * number)
//     })
//     return res;
// }
// console.log(squareSum([1, 2, 2]));

// Better Ways
// function squareSum(numbers) {
//     return numbers.reduce((t, v) => t += (v ** 2), 0)
// }
// console.log(squareSum([1, 2, 2]));
// -----------------------------------
// function squareSum(numbers) {
//     const multiply = number => number * number;
//     const reducer = (acc, cur) => acc + cur;
//     return Array.from(numbers, multiply).reduce(reducer, 0)
// }
// console.log(squareSum([1, 2, 2]));
// -----------------------------------
// function squareSum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i] ** 2
//     }
//     return sum;
// }
// console.log(squareSum([1, 2, 2]));


// N17
// *****************************************
// Write a function that takes an array of numbers 
// and returns the sum of the numbers. The numbers 
// can be negative or non-integer. If the array does not 
// contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// SOLUTION
// const numbers = [];
// function sum(numbers) {
//     'use strict';
//     return numbers.length === 0 ? 0 : numbers.reduce((t, v) => t + v);
// }
// console.log(sum(numbers));

// Better Way
// function sum(numbers) {
//     console.log(numbers.reduce((a, b) => a + b, 0));
// }
// sum([1, 5.2, 4, 0, -1]); // 9.2


// N18
// *****************************************
// In DNA strings, symbols "A" and "T" are complements 
// of each other, as "C" and "G". Your function receives 
// one side of the DNA (string, except for Haskell); you 
// need to return the other complementary side. DNA strand
//  is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: 
// http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// SOLUTION
// function DNAStrand(dna) {
//     var letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
//     var arr = [];
//     for (var i=0; i < dna.length; i++) {
//         arr[i] = letters[dna[i]];
//     }
//     return arr.join('');
// }


// N19
// *****************************************
// Given two integers a and b, which can be positive or 
// negative, find the sum of all the integers between 
// and including them and return it. If the two numbers 
// are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// SOLUTION
// function getSum(a, b) {
//     if (a === b) return a;
//     if (a < b) {
//         return a + getSum(a + 1, b);
//     } else {
//         return a + getSum(a - 1, b);
//     }
// }
// getSum(-1, 2)

// // Better Way
// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }
// console.log(GetSum(-1, 2))


// N20
// *****************************************
// There is a bus moving in the city, and it takes 
// and drop some people in each bus stop.

// You are provided with a list (or array) of integer 
// pairs. Elements of each pair represent number of 
// people get into bus (The first item) and number of 
// people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are 
// still in the bus after the last bus station 
// (after the last array). Even though it is the last 
// bus stop, the bus is not empty and some people are 
// still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that 
// the number of people in the bus is always >= 0. 
// So the return integer can't be negative.

// The second value in the first integer array is 0, 
// since the bus is empty in the first bus stop.

// SOLUTION
// const number = function(busStops) {
//     let people = 0;
//     for (let stop of busStops) {
//         people += stop[0] - stop[1];
//     }
//     return people;
// }
// console.log(number([[10,0],[3,5],[5,8]])); // 5


// N21
// *****************************************
// Create a function which answers the question 
// "Are you playing banjo?".
// If your name starts with the letter "R" or lower 
// case "r", you are playing banjo!

// The function takes a name as its only argument, 
// and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// SOLUTION
// function areYouPlayingBanjo(name) {
//     let n = name.toLowerCase();
//     return n[0] === 'r' ? 
//             `${name} plays banjo` : 
//             `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo('Raf'));


// N22
// *****************************************
// Make a program that filters a list of strings and 
// returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be 
// sure that it has to be a friend of yours! Otherwise, 
// you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], 
// Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] 
// `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// SOLUTION
// function friend(friends) {
//     return friends.filter(item => item.length === 4);
// }
// friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool", 'John', 'Joshua']);


// N23
// *****************************************
// SOLUTION
// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }
// console.log(rowSumOddNumbers(2));


// N24
// *****************************************
// Write function RemoveExclamationMarks which 
// removes all exclamation marks from a given string.

// SOLUTION
// function removeExlMarks(s) {
//     return [...s].filter(v => v !== '!').join('')
// }
// removeExlMarks('!Hello, World! === !!');

// Better Way
// function removeExlMarks(s) {
//     return s.replace(/!/gi, '');
// }
// removeExlMarks('!Hello, World! === !!');


// N25
// *****************************************
// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

// SOLUTION
// function sumMix(x) {
//     return x.reduce((t, v) => Number(t) + Number(v), 0);
// }
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']);


// N26
// *****************************************
// Given a non-empty array of integers, return the result 
// of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SOLUTION
// function grow(x) {
//     return x.reduce((t, v) => t * v)
// }
// grow([1, 2, 3, 4])


// N27
// *****************************************
// Your task is to convert strings to how they 
// would be written by Jaden Smith. The strings 
// are actual quotes from Jaden Smith, but they are 
// not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// SOLUTION
// function str(s) {
//     const words = s.split(' ');
//     return words.map(word => {
//         return word[0].toUpperCase() + word.substring(1);
//     }).join(' ');
// }
// str("How can mirrors be real if our eyes aren't real");

// Better Way
// String.prototype.toJadenCase = function() {
//     return this.split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }
// str("How can mirrors be real if our eyes aren't real");

// ----------------------------
// String.prototype.toJadenCase = function() {
//     return this.replace(/(^|\s)[a-z]/g, function(x) {
//         return x.toUpperCase();
//     });
// };
// str("How can mirrors be real if our eyes aren't real");


// N28
// *****************************************
// In this kata you will create a function that takes a 
// list of non-negative integers and strings and returns 
// a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// SOLUTION
// function filter_list(l) {
//     return l.filter(el => typeof el === 'number');
// }
// filter_list([1,"a","b",0,15, '123', 123]);


// N29
// *****************************************
// Task
// Given an array of integers, remove the smallest value. 
// Do not mutate the original array/list. If there are 
// multiple elements with the same value, remove the one with 
// a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// SOLUTION
// function removeSmallest(numbers) {
//     if (!isNaN(numbers)) return [];

//     const smallest = Math.min(...numbers);
//     const index = numbers.indexOf(smallest);
//     return numbers.filter((_, i) => i !== index);
// }
// removeSmallest([2, 3, 4, 1, 5, 1]);


// N30
// *****************************************
// Write a function named setAlarm which receives two 
// parameters. The first parameter, employed, is true 
// whenever you are employed and the second parameter, 
// vacation is true whenever you are on vacation.

// The function should return true if you are employed 
// and not on vacation (because these are the circumstances 
// under which you need to set an alarm). It should 
// return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// SOLUTION
// function setAlarm(employed, vacation) {
//     return employed === true && vacation === false ? true : false;
// }
// setAlarm(true, true);

// Better Way
// function setAlarm(employed, vacation) {
//     return employed && !vacation;
// }

// ----------------------------
// const setAlarm = (employed, vacation) => employed && !vacation;


// N31
// *****************************************
// Your task is to find the first element of 
// an array that is not consecutive.

// By not consecutive we mean not exactly 1 
// larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] 
// then 1 then 2 then 3 then 4 are all consecutive 
// but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// SOLUTION
// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] + 1 !== arr[i]) return arr[i];
//     }
//     return null;
// }
// firstNonConsecutive([1, 2, 3, 4, 6, 7, 8, 9]);


// N32
// *****************************************
// Implement a function that adds two numbers together 
// and returns their sum in binary. The conversion can 
// be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// SOLUTION
// function addBinary(a, b) {
//     return (a + b).toString(2);
// }
// addBinary(51, 12); // 111111


// N33
// *****************************************
// Grade book
// Complete the function so that it finds the average of 
// the three scores passed to it and returns the letter 
// value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// SOLUTION
// function getGrade (s1, s2, s3) {
//     let score = (s1 + s2 + s3) / 3;
//     if (score >= 90 && score <= 100) {
//         return 'A';
//     } else if (score >= 80) {
//         return 'B';
//     } else if (score >= 70) {
//         return 'C';
//     } else if (score >= 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
// getGrade(70,70,100);

// Better Way
// function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : 
//            s >= 80 ? "B" : 
//            s >= 70 ? "C" : 
//            s >= 60 ? "D" : 
//            "F"
// }


// N34
// *****************************************
// Complete the function that takes a string 
// as an argument representing the current state of 
// the light and returns a string representing the 
// state the light should change to.

// For example, when the input is green, 
// output should be yellow.

// SOLUTION
// function updateLight(current) {
//     return current === 'green' ? 'yellow' :
//             current === 'yellow' ? 'red' :
//             current === 'red' ? 'green' : null
// }
// updateLight('green');

// Better Way
// const updateLight = current => ({
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
// })[current];


// N35
// *****************************************
// Your task is to create the functionisDivideBy 
// (or is_divide_by) to check if an integer number 
// is divisible by both integers a and b.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

// SOLUTION
// function isDivideBy(n, a, b) {
//     return n % a === 0 && n % b === 0 ? true : false;
// }
// isDivideBy(-12, 2, -6);

// Better Way
// function isDivideBy(number, a, b) {
//     return [a, b].every(i => number % i === 0)
// }


// N36
// *****************************************
// Alex just got a new hula hoop, he loves it but 
// feels discouraged because his little brother is 
// better than him

// Write a program where Alex can input (n) how many 
// times the hoop goes round and it will return him an 
// encouraging message :)

// If Alex gets 10 or more hoops, return the string 
// "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string 
// "Keep at it until you get it".

// SOLUTION
// function hoopCount(n) {
//     return n >= 10 ?
//             'Great, now move on to tricks' :
//             'Keep at it until you get it'
// }
// hoopCount(9);


// N37
// *****************************************
// You are going to be given a word. Your job is to 
// return the middle character of the word. If the 
// word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// SOLUTION
// function getMiddle(s) {
//     let position, length;

//     if (s.length % 2 === 1) {
//         position = s.length / 2;
//         length = 1;
//     } else {
//         position = s.length / 2 - 1;
//         length = 2;
//     }
//     return s.substring(position, position + length);
// }
// getMiddle('test');

// Better Way
// function getMiddle(s) {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

// ----------------------------
// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }


// N38
// *****************************************
// You will be given an array a and a value x. All you need 
// to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// SOLUTION
// function check(a, x) {
//     let match = false;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === x) {
//             match = true;
//             break;
//         }
//     }
//     return match;
// }
// check([101, 45, 42, 75, 107, 99, 105], 107);

// The Best Way
// const check = (a, x) => a.includes(x);
// check([101, 45, 42, 75, 107, 99, 105], 107);


// N39
// *****************************************
// Task Overview:
// You have to write a function that accepts three parameters:

// cap  - is the amount of people the bus can hold excluding the driver.
// on   - is the number of people on the bus excluding the driver.
// wait - is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, 
// return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// SOLUTION
// function enough(cap, on, wait) {
//     return (on + wait > cap) ? (on + wait) - cap : 0;

//     // if (on + wait > cap) {
//     //     return (on + wait) - cap;
//     // }
//     // return 0;
// }
// enough(100, 60, 50);

// Better Way
// const enough = (cap, on, wait) => (on + wait > cap) ? (on + wait) - cap : 0
// enough(100, 60, 50);


// N40
// *****************************************
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice 
// as old as his son (or in how many years he will be twice as old)

// SOLUTION
// function twiceAsOld(dadY, sonY) {
//     let twice = dadY - sonY * 2;
//     return twice < 0 ? twice * (-1) : twice;
// }
// twiceAsOld(36, 7);

// Better Way
// function twiceAsOld(dadY, sonY) {
//     return Math.abs(dadY - 2 * sonY);
// }
// twiceAsOld(36, 7);

// const twiceAsOld = (d, s) => Math.abs(d - 2 * s)
// twiceAsOld(36, 7); // 22


// N41
// *****************************************
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove 
// all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string 
// and return a new string with all vowels removed.

// For example, the string "This website is for losers 
// LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// SOLUTION
// function disemvowel(str) {
//     const noVowels = str.replace(/[aeiou]/gi, '');
//     console.log(noVowels);
// }
// disemvowel("No offense but,\nYour writing is among the worst I've ever read");

// Better Way
// const disemvowel = (str) => str.replace(/[aeiou]/gi, '');
// disemvowel("No offense but,\nYour writing is among the worst I've ever read")


// N42
// *****************************************
// Your task is to make a function that can take any non-negative integer 
// as an argument and return it with its digits in descending order. Essentially, 
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// SOLUTION
// function descendingOrder(n) {
//     return Number(n.toString().split('').sort((a, b) => b - a).join(''));
// }
// descendingOrder(1021)


// N43
// *****************************************
// In this kata you are required to, given a string, replace every letter 
// with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 
//                  5 12 22 5 15 3 12 15 3 11" ( as a string )

// SOLUTION
// function alphabetPosition(text) {
//     let result = "";
//     for (let i = 0; i < text.length; i++) {
//       let code = text.toUpperCase().charCodeAt(i)
//       if (code > 64 && code < 91) result += (code - 64) + " ";
//     }
//     return result.slice(0, result.length - 1);
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// // Better Way
// function alphabetPosition(text) {
//     return text
//       .toUpperCase()
//       .match(/[a-z]/gi)
//       .map( (c) => c.charCodeAt() - 64)
//       .join(' ');
// }
// alphabetPosition("The sunset sets at twelve o' clock.");


// N44
// *****************************************
// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in 
// list b keeping their order.
// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be 
// removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// SOLUTION
// function arrayDiff(a, b) {
//     return a.filter(val => !b.includes(val));
// }
// arrayDiff([1,2,2], []); // == [2]


// N45
// *****************************************
// A pangram is a sentence that contains every single letter 
// of the alphabet at least once. For example, the sentence 
// "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. Ignore numbers and punctuation.

// SOLUTION
// function isPangram(string) {
//     let low = string.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (!low.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// Better Way

// function isPangram(string) {
//     let regex = /([a-z])(?!.*\1)/g;
//     console.log(string.match(regex).length === 26);
// }
// isPangram("The quick brown fox jumps over the lazy dog");


// N46
// *****************************************
// Create a function with two arguments that will return an array
// of the first (n) multiples of (x).
// Assume both the given number and the number of times to count 
// will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// SOLUTION
// function countBy(x, n) {
//   let z = [];

//   for (let i = n; i > 0; i--) {
//     z.push(i);
//   }
//   console.log(z.reverse());
// }
// countBy(2, 5);


// N47
// *****************************************
// A child is playing with a ball on the nth floor of a tall building. 
// The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), 
// to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window 
// (including when it's falling and bouncing?

// SOLUTION
// function bouncingBall(h, bounce, window) {
//   // Qualify the condition that must be met
//   const cond = h > 0 && (bounce > 0 && bounce < 1) && window < h;

//   // Check the condition
//   if (cond) {
//     // If condition is met, the ball will be seen once going up...
//     // And once coming down, as well as the first time its dropped
//     return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
//   } else {
//     // If condition is not met, per instructions, return -1
//     return -1;
//   }
// }
// bouncingBall(3, 1, 1.5);  // -1


// N48
// *****************************************
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// SOLUTION
// function XO(str) {
//   str = str.toLowerCase();

//   var arrayOfChar = str.split("");

//   var countX = arrayOfChar.reduce( function( n, val ) {
//       return n + (val === 'x');
//     }, 0);
    
//   var countO = arrayOfChar.reduce( function( n, val ) {
//       return n + (val === 'o');
//     }, 0);
  
//   if ( countX == countO ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// XO('xxxm');   // true

// Better Way
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }


// *****************************************
// CHECK IF STRING HAS THE SAME VALUE AND RETURN THEM

// function countInstances(string, word) {
//   return string.split(word).length - 1;
// }
// console.log(countInstances("This is a string", "is"))

// string = "Xanthous: A person with yellow hair. Her hair was very xanthous in colour."       
// count = string.split('').map((e,i) => { if(e === 'e') return i;}).filter(Boolean).length
// console.log(count);
// *****************************************


// *****************************************
// Just You should know this
// const test = `
// /**
//  * @test
//  * {
//  * }
//  * @example
//  * {
//  *    "name": "Error",
//  * }
//  * @test
//  * {
//  * }
//  * @example
//  * {
//  *    "name": "Success",
//  * }
//  */
// `;

// const matches = test.match(/@example[\s\S]*?(?=@test|$)/g);
// matches.forEach(m => console.log(m));
// *****************************************


// N49
// *****************************************
// Task
// Write a function that returns both the minimum and maximum 
// number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// SOLUTION
// function minMax(arr) {
//   let ar = [];
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   ar.push(min, max);
//   return ar;
// }
// minMax([1, 5]);

// Better Way
// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }


// N50
// *****************************************
// Given a string, you have to return a string in which each 
// character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// SOLUTION
// function doubleChar(str) {
//   return str.split('').map(i => i += i).join('');
// }
// doubleChar('String');


// N50
// *****************************************
// Write a function, persistence, that takes in a positive parameter num 
// and returns its multiplicative persistence, which is the number of times 
// you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// SOLUTION
// function persistence(num) {
//   let times = 0;
//   num = num.toString();
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
//   return times;
// }
// persistence(999);


// N51
// *****************************************
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, 
// he wants to know how many years 'Y' this sum 'P' has to be kept in the bank 
// in order for it to amount to a desired sum of money 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. 
// After paying taxes 'T' for the year the new sum is re-invested.
// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:
//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00

// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

// SOLUTION
// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
  
//   while (principal < desired) {
//     principal += principal * interest * (1 - tax);
//     years++;
//   }
//   return years;
// }
// calculateYears(1000, 0.01625, 0.18, 1200);  // 14

// Better Way
// function calculateYears(principal, interest, tax, desired) {
//   return Math.ceil(
//     Math.log(desired / principal) / 
//     Math.log(1 + interest * (1 - tax))
//   );
// }


// N52
// *****************************************
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] 
// --> "found the needle at position 5" 

// SOLUTION
// function findNeedle(haystack) {
//   return `Found the needle at position ${haystack.indexOf('needle')}`;
// }
// findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 
// 'a piece of hay', 'needle', 'something somebody lost a while ago']);


// N53
// *****************************************
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION
// const solution = str => str.split('').reverse().join('');

// solution('world');


// N54
// *****************************************
// You ask a small girl,"How old are you?" She always says, "x years old", 
// where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test 
// input may be "1 year old" or "5 years old". The first 
// character in the string is always a number.

// const getAge = str => Number(str.slice(0, 1));

// getAge('5 years old');  // 4


// N55
// *****************************************
// Your classmates asked you to copy some paperwork for them. 
// You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. 
// If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// SOLUTION
// function paperwork(n, m) {
//   return (n < 0 || m < 0) ? 0 : n * m;
// }
// paperwork(5, 5);


// N56
// *****************************************
// Complete the findNextSquare method that finds the next 
// integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such 
// that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. 
// You may assume the parameter is non-negative.

// SOLUTION
// function findNextSquare(sq) {
//   // Retrun the next square if sq is a perfect square, -1 otherwise
//   if (Number.isInteger(Math.sqrt(sq))) {
//     return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
//   } else {
//     return -1;
//   }
// }
// findNextSquare(121);

// Better Way
// function findNextSquare(sq) {
//   var root = Math.sqrt(sq);
//   return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
// }


// N57
// *****************************************
// Every day you rent the car costs $40. If you rent the car for 7 or 
// more days, you get $50 off your total. Alternatively, if you rent the 
// car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   // if (d < 3) {
//   //   return d * 40
//   // } else if (d >= 7) {
//   //   return d * 40 - 50
//   // } else if (d >= 3) {
//   //   return d * 40 - 20
//   // }
//   return d < 3 ? d * 40 : d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : 0
// }
// rentalCarCost(8);

// Better Way
// function rentalCarCost(d) {
//   return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
// }


// N58
// *****************************************
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method 
// such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your 
// selected language; see the initial solution for details) such that each 
// lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

//SOLUTION
// String.prototype.toAlternatingCase = function() {
//   let str = '';
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] == this[i].toLowerCase()) {
//       str += this[i].toUpperCase();
//     } else {
//       str += this[i].toLowerCase();
//     }
//   }
//   return str;
// }

// Better Way
// String.prototype.toAlternatingCase = function() {
//   return this.split('').map(item => item === item.toUpperCase() ? 
//   item.toLowerCase() : item.toUpperCase()).join('');
// }


// N59
// *****************************************
// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore 
// capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// SOLUTION
// function duplicateEncode(str){
//   //create a var to hold string value that IGNORES case
//   let word = str.toLowerCase();
//   //create a var to hold the finished string to return after it's looped through 
//   let unique = '';
//   //loop through all letters in string
//     for (var i = 0; i < word.length; i++) {
//   //check for any characters that repeat
//       if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//   //for each character that never dupes, place (
//         unique += '(';
//       } else
//   //for each character that IS a dupe, place )
//       unique += ')';
//     }
//   //return the full string value where '(' are non duped and all')' are duped
//     return unique;
// }
//   //test by printing this in the console
//   console.log(duplicateEncode('asVaabcd'));

// Better Way
// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }


// N60
// *****************************************
// Simple, remove the spaces from the string, then return the resultant string.

// SOLUTION
// const noSpace = (x) => x.replace(/\s+/g, '');
// noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd');


// N61
// *****************************************
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting 
// the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// SOLUTION
// function expressionMatter(a, b, c) {
//   let result = Math.max(
//     a + b + c,
//     a * b * c,
//     a * b + c,
//     a * (b + c),
//     a + b * c,
//     (a + b) * c
//   );
//   return result;
// }
// expressionMatter(1, 2, 3);  // 9


// N62
// *****************************************
// Write a function which takes a list of strings and returns each 
// line prepended by the correct number.

// The numbering starts at 1. The format is n: string. 
// Notice the colon and space in between.

// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// SOLUTION
// const number = function(arr) {
//   let result = [];
//   for (let i = 0, j = 1; i < arr.length; i += 1) {
//     if (arr.length === 0) {
//       return `Empty array should return empty array`;
//     } else {
//       result.push(`${j}: ${arr[i]}`);
//       j += 1;
//     }
//   }
//   return result;
// }
// number(['a', 'b', 'c']);  // ["1: a", "2: b", "3: c"]

// Better Way
// const number = function(array) {
//   return array.map(function(line, index) {
//     return `${(index + 1)}: ${line}`;
//   })
// }

// Best Way
// const number = (a) => a.map((v, i) => `${i + 1}: ${v}`);


// N63
// *****************************************
// In this simple assignment you are given a number and have to 
// make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. 
// Negative zeros make no mathematical sense.

// SOLUTION
// function makeNegative(num) {
//   return num === 0 ? 0 : (-Math.abs(num));
// }
// makeNegative(00); // 0

// Better Way
// const makeNegative = num => num < 0 ? num : -num;


// N64
// *****************************************
// There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required for 
// all the customers to check out!

// input
// customers: an array of positive integers representing the queue. 
// Each integer represents a customer, and its value is the amount of time 
// they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// SOLUTION
// function queueTime(customers, n) {
//   let w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }
// queueTime([2, 2, 3, 3, 4, 4], 2);   // 9


// N65
// *****************************************
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the 
// digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// SOLUTION
// function digitize(n) {
//   return String(n).split('').map(Number).reverse();
// }
// digitize(35231);  // [1, 3, 2, 5, 3];


// N66
// *****************************************
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

// SOLUTION
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }
// goals(43, 10, 5);


// N67
// *****************************************
// The number 89 is the first integer with more than one digit that 
// fulfills the property partially introduced in the title of this kata. 
// What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two 
// integers a, b that defines the range [a, b] (inclusive) and outputs a list 
// of the sorted numbers in the range that fulfills the property described above

// SOLUTION
// function sumDigPow(a, b) {
//   let eureka = [];
//   for (i = a; i <= b; i++) {
//     let digits = String(i).split('');
//     if (i === digits.reduce(function(accumulator, currentValue, currentIndex) {
//       return accumulator + currentValue**(currentIndex + 1);
//     }, 0)) {
//       eureka.push(i);
//     }
//   }
//   return eureka;
// }
// sumDigPow(10, 100);   // [89];

// Better Way
// const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

// const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );


// N68
// *****************************************
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// SOLUTION
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw!';
//   } else if (
//             (p1 == "scissors" && p2 == "paper") || 
//             (p1 == "paper" && p2 == "rock") || 
//             (p1 == "rock" && p2 == "scissors") ) {
//     return "Player 1 won!";
//   } else { 
//     return "Player 2 won!";
//   }
// }
// rps('rock', 'scissors');

// Better Way
// const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   }; 
//   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
// }

// Best Way
// rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;


// N69
// *****************************************
// Complete the function that takes a non-negative integer n as input, and returns 
// a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// SOLUTION
// function powerOfTwo(n) {
//   let arr = [];
//   for (let i = n; i >= 0; i--) {
//     arr.push(Math.pow(2, i));
//   }
//   return arr.reverse();
// }
// powerOfTwo(4);    // [1, 2, 4, 8, 16]


// N70
// *****************************************
// Complete the solution so that the function will break up camel 
// casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// SOLUTION
// const solution = str => str.split(/(?=[A-Z])/).join(' ');
// solution('camelCasing');


// N71
// *****************************************
// We need a function that can transform a string into a number. 
// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string 
// is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// SOLUTION
// const stringToNumber = function(str) {
//   return Number(str);
// }
// stringToNumber('-1234');


// N72
// *****************************************
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time 
// since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000

// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// SOLUTION
// function past(h, m, s) {
//   return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
// }
// past(1, 0, 1);    // 3601000

// Better Way
// function past(h, m, s) {
//   return ((h * 3600) + (m * 60) + s) * 1000;
// }


// N73
// *****************************************
// In a factory a printer prints labels for boxes. For one kind of boxes 
// the printer has to use colors which, for the sake of simplicity, are 
// named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer 
// used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a 
// "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will 
// return the error rate of the printer as a string representing a rational whose 
// numerator is the number of errors and the denominator the length of the control string. 
// Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// SOLUTION
// function printerError(s) {
//     const regex = /[a-m]/g
//     const proper_num_of_matches = ((s || '').match(regex) || []).length
//     return `${s.length - proper_num_of_matches}/${s.length}`
// }
// printerError('aaaxbbbbyyhwawiwjjjwwm');   // '8/22'

// Better Way
// function printerError(s) {
//   var count = 0;
//   for(var i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return count+"/"+s.length;
// }


// N74
// *****************************************
// Bob needs a fast way to calculate the volume of a cuboid with three 
// values: the length, width and height of the cuboid. 
// Write a function to help Bob with this calculation

// SOLUTION
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }
// console.log(Kata.getVolumeOfCuboid(6.3, 2, 5));


// N75
// *****************************************
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces

// SOLUTION
// function getCount(str) {
//   let vowels = /[aeiou]/gi;
//   let result = str.match(vowels);
//   if (result === null) {
//     return 0;
//   }
//   return result.length;
// }
// getCount('abracadabra');  // 5

// Better Way
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }


// N76
// *****************************************
// You are given an array(list) strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k 
// consecutive strings taken in the array.

// Examples: 
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// SOLUTION
// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || k > strarr.length || k <= 0) {
//     return '';
//   } else {
//     let arr = [];
//     for (let i = 0; i < strarr.length - k + 1; i++) {
//       arr[i] = strarr.slice(i, k + i).join('');
//     }
//     let longest = arr.reduce(function(a, b) {
//       return a.length >= b.length ? a : b;
//     });
//     return longest;
//   }
// }
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);  // "abigailtheta"


// N77
// *****************************************
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// SOLUTION
// const stringToArray = str => str.split(' ');
// stringToArray("I love arrays they are my favorite");  // ["I", "love", "arrays", "they", "are", "my", "favorite"]


// N78
// *****************************************
// Who remembers back to their time in the schoolyard, when girls would take a 
// flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower 
// of a given number of petals, where nb_petals > 0.

// SOLUTION
// function howMuchILoveYou(nbPetals) {
//   if(nbPetals%6 == 1){
//     return ("I love you");
//   }else if(nbPetals%6 == 2){
//     return ("a little");
//   }else if(nbPetals%6 ==3){
//     return ("a lot");
//   }else if(nbPetals%6 ==4){
//     return ("passionately");
//   }else if(nbPetals%6 == 5){
//     return ("madly");
//   }else{
//     return ("not at all");
//   }
// }
// howMuchILoveYou(6);   // "not at all"

// Better Way
// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]

// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length] 
// }


// N79
// *****************************************
// Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers

// SOLUTION
// const evenOrOdd = n => n%2 === 0 ? 'Even' : 'Odd';
// evenOrOdd(-21);


// N80
// *****************************************
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the 
// average student in your class.

// You receive an array with your peers' test scores. Now calculate the 
// average and compare your score!
// Return True if you're better, else False!

// SOLUTION
// function betterThanAverage(classPoints, yourPoints) {
//   const average = classPoints.reduce((a, b) => a + b, 0)/classPoints.length
//   if (yourPoints > average) {
//     return true;
//   }
//   return false;
// }
// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); // true


// N81
// *****************************************
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all 
// the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// SOLUTION
// function encrypt(text, n) {
//   if (!text || n <= 0) return text; 
//   while (n--) {
//     let ans = '';
//     for (let i = 1; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     for (let i = 0; i < text.length; i += 2) {
//       ans += text[i];
//     }
//     text = ans;
//   }
//   return text;
// }
// encrypt("012345", 1);

// function decrypt(encryptedText, n) {
//   if (!encryptedText || n <= 0) return encryptedText;
//   const ans = new Array(encryptedText.length);
//   while (n--) {
//     let j = 0;
//     for (let i = 1; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     for (let i = 0; i < ans.length; i += 2) {
//       ans[i] = encryptedText[j++];
//     }
//     encryptedText = ans.join('');
//   }
//   return encryptedText;
// }


// N82
// *****************************************
// Create a function finalGrade, which calculates the final grade of a student 
// depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); 
// projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of 
// final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

// SOLUTION
// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) {
//     return 100;
//   } else if (exam > 75 && projects >= 5) {
//     return 90;
//   } else if (exam > 50 && projects >= 2) {
//     return 75;
//   } else {
//     return 0;
//   }
// }
// finalGrade(55, 3);
// I DID THIS FOR MYSELF 😎

// Better Way
// const finalGrade = (exam, projects) => {
//   return (
//     exam > 90 || projects > 10 ? 100 :
//     exam > 75 && projects >= 5 ? 90 :
//     exam > 50 && projects >= 2 ? 75 : 0
//   )
// }

// ONE THING: YOU MUST READ THE TASK WITH GREAT ATTENTION
// HERE IS MY NEW OVERALL RACK IS 5 KYU. RESPECT
