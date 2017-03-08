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

/*
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

*/
/*
var age = 16;

if(age < 20 && age) {
    console.log('John is a teenager');
} else {
    console.log('John is a man');
}

*/

// Calculates the score from the height and age
function calcScore(height, age) {
    return height + (age * 5);
}

// Calculates a score, given a particular contestant's name
function getScoreFromUserInput(name) {
    // Prompt user for the age and height of each contestant
    var age = prompt('Enter ' + names[i] + '\'s age');
    var height = prompt('Enter ' + names[i] + '\'s height');

    // Calculate the score for the contestant
    var score = calcScore(height, age);

    return score;
}

// Returns a collection of contestant scores, given a list of names
// and a scoring function
function getContestantScores(names, scoringFunc) {
    var scores = [];

    for(i = 0; i < names.length; i++) {
        // Add a score for each user, using the configured scoring method
        scores.push(scoringFunc(names[i]));
    }

    return scores;
}

// Determines the maximum score, given a list of calculated scores
function getMaximumScore(scores) {
    var maxScore = 0;

    for (i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
    }

    return maxScore;
}

// Returns a list of names of winners, given the winning score
function getWinnerList(names, scores, winningScore) {
    var winners = [];

    for(i = 0; i < names.length; i++) {
        if (scores[i] == winningScore) {
            winners.push(names[i]);
        }
    }

    return winners;
}

// Composes a message regarding the number and names of winners
function getDeclarationOfVictory(winners, winningScore) {
    var message = '';

    if (winners.length == 0) {
        message = 'Nobody won!';
    } else {
        if (winners.length > 1) {
            message = 'There was a draw by ' + winners.length.toString() + ' contestants!  They were ';
        } else {
            message = 'And the grand victor of the game is...';
        }

        for (i = 0; i < winners.length; i++) {
            message += winners[i];

            if(i < winners.length - 2) {
                message += ', ';
            }

            if(i == winners.length - 2) {
                message += ' and ';
            }

            if(i == winners.length - 1) {
                message += '!';
            }
        }

        message += '  The winning score was ' + winningScore.toString();
    }

    return message;
}

/*
----------------------------------------------------------------------------------------------------------------------------------
Main program body starts here...
----------------------------------------------------------------------------------------------------------------------------------
*/

// Declare the names of all contestants
var names = ['John', 'Peter', 'Mark'];

// Get the scores for all contestants
var scores = getContestantScores(names, getScoreFromUserInput);

// Determine the maximum score
var maxScore = getMaximumScore(scores);

// Get a list of all winners, based on the scores and max score
var winners = getWinnerList(names, scores, maxScore);

// Shout it from the rooftops!
console.log(getDeclarationOfVictory(winners, maxScore));
