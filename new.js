genName = function(array) {
    // console.log(input);
    showNames = [];

    for (i = 0; i < array; i++) {
        var firstNames = ["Ray", "Ardar", "Lzo"];

        var randomNumber = Math.floor(Math.random() * firstNames.length);

        showNames.push(firstNames[randomNumber]);

        console.log("Random name: ", showNames);
    }
}
