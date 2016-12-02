$(document).ready(function() {
    $(".dangerMessage").hide();
    $(".addSpy").on('click', newSpy);
    $(".container").on('click', ".spyDiedButton", spyDied);
    $(".container").on('click', ".deleter", deleteSpyRecord);
    $(".container").on('click', ".clickIfDangerButton", spyDangerButton);
    $(".container").on('click', ".changer", changeStatus);
}); // end doc ready

// Variables
var firstNames = ["Mata", "Julius", "Ethel", "Aldrich", "Giacomo", "Klaus", "John", "Nathan", "Belle", "Richard"];
var lastNames = ["Hari", "Rosenberg", "Ames", "Casanova", "Fuchs", "Andre", "Hale", "Boyd", "Sorge", "Bromander"];
var numberOfSpies = 0;
var activeSpiesNum = 0;
var spiesInDanger = 0;


// Functions

// Spy Name Randomizer
var randomizeNames = function(inputOne, inputTwo) {
    newFullName = [];
    var randomNumberOne = Math.floor(Math.random() * firstNames.length);
    var randomNumberTwo = Math.floor(Math.random() * lastNames.length);

    newFullName.push(firstNames[randomNumberOne] + " " + lastNames[randomNumberTwo]);
}

// Add New Spy Button Function
function newSpy() {
    // increment # of spies hired each time you generate a new spy
    numberOfSpies++;
    // increment # of spies active
    activeSpiesNum++;

    // run random name function to get a new name
    randomizeNames(firstNames, lastNames);
    // make a new row container for each new spy
    $("<div class='spy'></div>").appendTo(".container").text(newFullName);

    // add a Death Button onto each spy row
    $(".spy").last().append("<button class='spyDiedButton'>Died</button>");
    // add change status Button onto each spy row
    $(".spy").last().append("<button class='clickIfDangerButton'>Click if Danger</button>");

    // display # of total spies hired
    $(".hiredSpiesNum").empty();
    $(".hiredSpiesNum").append(numberOfSpies);
    // display # of total spies active
    $(".activeSpiesNum").empty();
    $(".activeSpiesNum").append(activeSpiesNum);

}

// To get your delete and change buttons to only effect their containing div,
// you'll need to use $(this).parent(), where $(this) refers to the button
// that was clicked.

// Delete Spy Record Button Function
function deleteSpyRecord() {
    //deletes entire spy row
    $(this).parent().remove();
}

// Spy Died Button Function
function spyDied() {
    // decrement # of spies active
    activeSpiesNum--;
    // decrement spies in danger if applicable
    if ($(this).parent().hasClass("spyInDanger")) {
        changeStatus();
    }
    // display # of total spies active
    $(".activeSpiesNum").empty();
    $(".activeSpiesNum").append(activeSpiesNum);

    //change spy record row to black and white
    $(this).parent().addClass("deadSpy");

    // remove the danger and/or safe button
    $(this).parent().find("button.clickIfDangerButton").remove();
    $(this).parent().find("button.changer").remove();

    // add a Delete Button onto each spy row
    $(this).parent().append("<button class='deleter'>Delete Spy Records</button>");
    //remove button that was just pressed ("Died")! XD
    $(this).remove();
}

// Click if Safe Button Function
function changeStatus() {
    if (spiesInDanger >= 1) {
        spiesInDanger--;
        // console.log(spiesInDanger);
    }

    if (spiesInDanger === 1) {
        $('.spiesInDangerLabel').html("! Warning:  " + "<div class='numSpiesInDanger'></div>" + " Spy in Danger");
    } else {
        $('.spiesInDangerLabel').html("! Warning:  " + "<div class='numSpiesInDanger'></div>" + " Spies in Danger");
    }

    // change text to Safe or Danger
    $(this).text("Click if Safe");

    $(this).parent().toggleClass("spyInDanger");
    // display # of total spies in danger
    $(".numSpiesInDanger").empty();
    $(".numSpiesInDanger").append(spiesInDanger);

    $(this).parent().append("<button class='clickIfDangerButton'>Click if Danger</button>");
    $(this).remove();

    if (spiesInDanger <= 0) {
        $(".dangerMessage").hide();
    }
}

// Click if Danger Button Function
function spyDangerButton() {
    if (spiesInDanger >= 0) {
        spiesInDanger++;
        // console.log(spiesInDanger);
        $(".dangerMessage").show();
    }

    if (spiesInDanger === 1) {
        $('.spiesInDangerLabel').html("! Warning:  " + "<div class='numSpiesInDanger'></div>" + " Spy in Danger");
    } else {
        $('.spiesInDangerLabel').html("! Warning:  " + "<div class='numSpiesInDanger'></div>" + " Spies in Danger");
    }


    //change background color - red if in danger, yellow if safe
    $(this).parent().toggleClass("spyInDanger");

    // display # of total spies in danger
    $(".numSpiesInDanger").empty();
    $(".numSpiesInDanger").append(spiesInDanger);

    $(this).parent().append("<button class='changer'>Click if Safe</button>");
    $(this).remove();
}
