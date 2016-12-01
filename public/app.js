$(document).ready(function() {
    $(".container").append("<div class='newContainer'></div>");

    $(".addSpy").on('click', newSpy);
    $(".newContainer").on('click', ".spyDiedButton", spyDied);
    $(".newContainer").on('click', ".deleter", deleteSpyRecord);
    $(".newContainer").on('click', ".changer", changeStatus);

});

// Variables
var firstNames = ["Mata", "Julius", "Ethel", "Aldrich", "Giacomo", "Klaus", "John", "Nathan", "Belle", "Richard"];
var lastNames = ["Hari", "Rosenberg", "Ames", "Casanova", "Fuchs", "Andre", "Hale", "Boyd", "Sorge", "Bromander"];
var numberOfSpies = 1;

function newSpy() {
    // run random name function to get a new name
    randomizeNames(firstNames, lastNames);

    // make a new row container for each new spy
    $("<div class='spy'></div>").appendTo(".newContainer").text(newFullName);

    // add a Delete Button onto each spy row
    $(".spy").last().append("<button class='spyDiedButton'>Died</button>");
    // add change status Button onto each spy row
    $(".spy").last().append("<button class='changer'>Change</button>");
    // display # of total spies hired
    $(".hiredSpiesNum").empty();
    $(".hiredSpiesNum").append(numberOfSpies);

    // increment # of spies hired each time you generate a new spy
    numberOfSpies++;
}

// Spy Name Randomizer
var randomizeNames = function(inputOne, inputTwo) {
    newFullName = [];
    var randomNumberOne = Math.floor(Math.random() * firstNames.length);
    var randomNumberTwo = Math.floor(Math.random() * lastNames.length);

    newFullName.push(firstNames[randomNumberOne] + " " + lastNames[randomNumberTwo]);
}

// To get your delete and change buttons to only effect their containing div,
// you'll need to use $(this).parent(), where $(this) refers to the button
// that was clicked.

function deleteSpyRecord() {
    $(this).parent().remove();
}

function spyDied() {
    //change spy record row to black and white
    $(this).parent().addClass("deadSpy");


    // remove the "change" button
    $(this).parent().find("button.changer").remove();
    // add a Delete Button onto each spy row
    $(this).parent().append("<button class='deleter'>Delete Spy</button>");
    //remove button that was just pressed ("Died")! XD
    $(this).remove();
}

function changeStatus() {
    // $(this).parent().css("backgroundColor", "red");
    $(this).parent().toggleClass("spyInDanger");
}
