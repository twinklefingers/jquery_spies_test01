$(document).ready(function() {
    $(".container").append("<div class='newContainer'></div>");

    $(".addSpy").on('click', newSpy);
    $(".newContainer").on('click', ".deleter", deleteSpy);
    $(".newContainer").on('click', ".changer", changeStatus);


});
var i = 1;

function newSpy() {
    $("<div />", {
        "class": "spy",
        id: "newSpy" + i
    }).appendTo(".newContainer").text("New Spy" + i);
    $(".spy").last().append("<button class='deleter'>Delete Spy</button>");
    $(".spy").last().append("<button class='changer'>Change</button>");
    $(".spy").last().append("<p style='display: inline'>Total Spies Hired:" + i + "</p>");
    i++;
}

//To get your delete and change buttons to only effect their containing div,
// you'll need to use $(this).parent(), where $(this) refers to the button
// that was clicked.

function deleteSpy() {
    $(this).parent().remove();
}

function changeStatus() {
    // $(this).parent().css("backgroundColor", "red");
    $(this).parent().toggleClass("spyInDanger");
}
