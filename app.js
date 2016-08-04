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
        })
        .appendTo(".newContainer").text("New Spy" + i);
    $(".spy").last().append("<button class='deleter'>Delete Spy</button>");
    $(".spy").last().append("<button class='changer'>Change</button>");
    i++;
}

function deleteSpy() {
    $(".spy").remove();
}

function changeStatus(){
	$(".spy").css("backgroundColor", "red");
}


// document.getElementById('test').style.backgroundColor === colorToCompare
// function changeStatus() {
// 	if( document.getElementByClass('.spy').style.backgroundColor === "yellow"){
//     $(".spy").css('background-color', 'red');
// 	} else {
// 		$(".spy").css('background-color', 'yellow');
// 	}
// }
