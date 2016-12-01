$(document).ready(function() {
    $(".container").append("<div class='newContainer'></div>");

    $(".addSpy").on('click', newSpy);
    $(".newContainer").on('click', ".deleter", deleteSpy);
    $(".newContainer").on('click', ".changer", changeStatus);

});
var i = 1;

function newSpy() {
  randomizeNames(firstNames, lastNames)

    // make a new row container for each new spy
    $("<div />", {
        "class": "spy"
    }).appendTo(".newContainer").text(newFullName);
    // $(".newContainer").append("<div class='spy'></div>").text("New Spy" + i); //didn't work
    //     $(".newContainer").append("<div class='spy'>"
    //         New Spy + "i"
    //         "</div>"); // didn't work
    //   $(".newContainer").last().append("<div class='spy'>New Spy" + i + "</div>"); //didn't work

    // add a Delete Button onto each spy row
    $(".spy").last().append("<button class='deleter'>Delete Spy</button>");
    // add change status Button onto each spy row
    $(".spy").last().append("<button class='changer'>Change</button>");
    // display # of total spies hired
    $(".spy").last().append("<p style='display: inline'>Total Spies Hired:" + i + "</p>");
    i++;
}
var firstNames = ["Mata", "Julius", "Ethel", "Aldrich", "Giacomo", "Klaus", "John", "Nathan", "Belle", "Richard"];
var lastNames = ["Hari", "Rosenberg", "Ames", "Casanova", "Fuchs", "Andre", "Hale", "Boyd", "Sorge", "Bromander"];

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

function deleteSpy() {
    $(this).parent().remove();
}

function changeStatus() {
    // $(this).parent().css("backgroundColor", "red");
    $(this).parent().toggleClass("spyInDanger");
}
