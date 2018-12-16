$(document).ready(function () {

    //Global Variables, to be referred to throughout any function.
    var targetNum = 0;
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    var blueScore = 0;
    var purpleScore = 0;
    var pinkScore = 0;
    var yellowScore = 0;

    // This function will generate a random number = Target
    function targetScore() {
        targetNum = Math.floor((Math.random() * 102) + 19);
        // It will then populate the HTML with this number.
        document.getElementById("scoreToMeet").innerHTML = targetNum;
    };
    // This will call the targetScore function.
    targetScore();

    // Jquery will get the element by its ID #purpleGem
    // then on click will assign a random value in between 1 and 12 to the Purple Crystal.
    $("#purpleGem").on('click', function () {

        if (purpleScore) {
            currentScore = currentScore + purpleScore;
            // then will add that value to the Score Board by replacing it on the HTML <div>
            $("#currentScore").text(currentScore);
            // Call the scorekeeping function
            scoreKeeper();
        }

        else {
            purpleScore = Math.floor((Math.random() * 11) + 1);
        }
    });

    // Jquery will get the element by its ID #yellowGem
    // then on click will assign a random value in between 1 and 12 to the Yellow Crystal.
    $("#yellowGem").on('click', function () {

        if (yellowScore) {
            currentScore = currentScore + yellowScore;
            // then will add that value to the Score Board by replacing it on the HTML <div>
            $("#currentScore").text(currentScore);
            // Call the scorekeeping function
            scoreKeeper();
        }

        else {
            yellowScore = Math.floor((Math.random() * 11) + 1);
        }
    });

    // Jquery will get the element by its ID #blueGem
    // then on click will assign a random value in between 1 and 12 to the Blue Crystal.
    $("#blueGem").on('click', function () {

        if (blueScore) {
            currentScore = currentScore + blueScore;
            // then will add that value to the Score Board by replacing it on the HTML <div>
            $("#currentScore").text(currentScore);
            // Call the scorekeeping function
            scoreKeeper();
        }

        else {
            blueScore = Math.floor((Math.random() * 11) + 1);
        }
    });

    // Jquery will get the element by its ID #pinkGem
    // then on click will assign a random value in between 1 and 12 to the Pink Crystal.
    $("#pinkGem").on('click', function () {

        if (pinkScore) {
            currentScore = currentScore + pinkScore;
            // then will add that value to the Score Board by replacing it on the HTML <div>
            $("#currentScore").text(currentScore);
            // Call the scorekeeping function
            scoreKeeper();
        }

        else {
            pinkScore = Math.floor((Math.random() * 11) + 1);
        }
    });

    // This function will check whether the score equals the target.
    function scoreKeeper() {
        // If it does, then the user win counter will be added by one.
        if (currentScore == targetNum) {

            alert("Great Job!");
            wins++;
            $("#wins").html("<b>" + wins + "</b>");
            $("#currentScore").html(" ");
            scoreToMeet = 0;
            currentScore = 0;
            blueScore = 0;
            purpleScore = 0;
            pinkScore = 0;
            yellowScore = 0;
            targetScore();
        };
        // If it goes over the target number, then it will alert the loss and loss counter added by one.
        if (currentScore > targetNum) {

            alert("It wasn't this time. Try Again");
            losses++;
            $("#losses").html("<b>" + losses + "</b>");
            $("#currentScore").html(" ");
            scoreToMeet = 0;
            currentScore = 0;
            blueScore = 0;
            purpleScore = 0;
            pinkScore = 0;
            yellowScore = 0;
            targetScore();
        }
    };
});

