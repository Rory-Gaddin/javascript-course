/*

Author: Rory Gaddin
Date  : 04 March 2017

*/

/*

No longer need the stuff below, because the lecturer can't make up his mind
about what this file is for!

var name = 'John';
console.log(name);

var lastName = ' Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

*/

yesNo = function(bool) {
    if (typeof(bool) != 'Boolean') {
        Error("You must pass a Boolean value to yesNo");
    }

    if (bool) {
        return 'Yes'
    }
    else {
        return 'No'
    }
}

// Lecture: variables 2
var name = 'John';
var age = 26;

console.log(name + age);

var job, isMarried;
console.log(job);

job = 'Teacher';
isMarried = true;

console.log(name + ' ' + age + ' ' + job + ' ' + yesNo(isMarried));

