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


// Creates a new contestant object
function makeNewContestant() {
    var name = prompt('What is the contestant\'s name?');
    var age = prompt('What is the contestant\'s age in years?');
    var height = prompt('What is the contestant\'s height in centimeters?');

    var contestant = {
        name: name,
        age: parseInt(age),
        height: parseInt(height),
        score: null
    }

    return contestant;
}

// Calculates the score from the height and age
function calcScoreFromHeightAndAge(height, age) {
    return height + (age * 5);
}

// Calculates a score, given a particular contestant's name
function getScoreFromHeightAndAge(contestant) {
    // Calculate the score for the contestant
    var score = calcScoreFromHeightAndAge(contestant.height, contestant.age);

    return score;
}

// Returns a collection of contestant scores, given a list of names
// and a scoring function
function getContestantScores(contestants, scoringFunc) {
    for(i = 0; i < contestants.length; i++) {
        // Add a score for each user, using the configured scoring method
        contestants[i].score = (scoringFunc(contestants[i]));
    }

    return contestants;
}

// Determines the maximum score, given a list of calculated scores
function getMaximumScore(contestants) {
    var maxScore = 0;

    for (i = 0; i < contestants.length; i++) {
        var score = contestants[i].score;

        if (score > maxScore) {
            maxScore = score;
        }
    }

    return maxScore;
}

// Returns a collection of contestants who won, given a winning score
function getWinners(contestants, winningScore) {
    var winners = [];

    for(i = 0; i < contestants.length; i++) {
        if (contestants[i].score == winningScore) {
            winners.push(contestants[i]);
        }
    }

    return winners;
}

// Composes a message regarding the number and names of winners
function getDeclarationOfVictory(winners, winningScore) {
    var message = '';

    if (winners.length == 0) {
        message = 'Nobody won!!  That should never happen, unless you put in some dirty data!';
    } else {
        if (winners.length > 1) {
            message = 'There was a draw by ' + winners.length.toString() + ' contestants!  They were ';
        } else {
            message = 'And the grand victor of the game is...';
        }

        for (i = 0; i < winners.length; i++) {
            message += winners[i].name;

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

// The main game logic happens here...
function playGame(contestants) {
    // Get the scores for all contestants
    var contestants = getContestantScores(contestants, getScoreFromHeightAndAge);

    // Determine the maximum score
    var maxScore = getMaximumScore(contestants);

    // Get a list of all winners, based on the scores and max score
    var winners = getWinners(contestants, maxScore);

    // Shout it from the rooftops!
    console.log(getDeclarationOfVictory(winners, maxScore));
}

/*
----------------------------------------------------------------------------------------------------------------------------------
Main program body starts here...
----------------------------------------------------------------------------------------------------------------------------------
*/

// Create some contestants
var contestants = [];

while (prompt('Type \'Yes\' if you would like to create a new contestant') == 'Yes') {
    contestants.push(makeNewContestant());
}

if (contestants.length == 0) {
    console.log('No contestants defined!  Looks like nobody wants to play.');
} else {
    playGame(contestants);
}
