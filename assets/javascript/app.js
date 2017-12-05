// Click to Start
// Timer begins at 60 seconds and countdown
// Player goes through all 8 movies
// player can only guess one answer per movie title
// player submit's answers
// HTML is updated with users score

var questions = [{
    ques: "The Grand Budapest Hotel",
    ans: ["Willem Dafoe", "Jeff Goldblum", "Luke Wilson", "Saoirse Ronan"],
    name: "budapest",
    correct: "Luke Wilson",
    divClass: ".budapest"
},
{
    ques: "Fantastic Mr. Fox",
    ans: ["Bill Murray", "Anjelica Huston", "George Clooney", "Jason Schwartzman"],
    name: "mrFox",
    correct: "Anjelica Huston",
    divClass: ".mrFox"
},
{
    ques: "The Life Aquatic with Steve Zissou",
    ans: ["Jason Schwartzman", "Willem Dafoe", "Bill Murray", "Anjelica Huston"],
    name: "lifeAquatic",
    correct: "Jason Schwartzman",
    divClass: ".lifeAquatic"
},
{
    ques: "The Darjeeling Limited",
    ans: ["Owen Wilson", "Jason Schwartzman", "Edward Norton", "Adrian Brody"],
    name: "darjeeling",
    correct: "Edward Norton",
    divClass: ".darjeeling"
},
{
    ques: "Moonrise Kingdom",
    ans: ["Adrien Brody", "Bill Murray", "Edward Norton", "Bruce Willis"],
    name: "moonrise",
    correct: "Adrien Brody",
    divClass: ".moonrise"
},
{
    ques: "The Royal Tenenbaums",
    ans: ["Luke Wilson", "Anjelica Huston", "Jeff Goldblum", "Owen Wilson"],
    name: "tenenbaums",
    correct: "Jeff Goldblum",
    divClass: ".tenenbaums"
},
{
    ques: "Rushmore",
    ans: ["Owen Wilson", "Jason Schwartzman", "Bill Murray", "Luke Wilson"],
    name: "rushmore",
    correct: "Owen Wilson",
    divClass: ".rushmore"
},
{
    ques: "Bottle Rocket",
    ans: ["Bill Murray", " James Caan", "Luke Wilson", "Owen Wilson"],
    name: "bottleRocket",
    correct: "Bill Murray",
    divClass: ".bottleRocket"
}
]

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying movie titles
var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();
    // loops through the 8 questions 
    for (var j = 0; j < 8; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName
            for (var i = 0; i < 8; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function () {
        clearInterval(timer);
    })
};


// function to grade after the submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName 
    for (var i = 0; i < 8; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submitted...
    // run test
    // stop timer
    countdown();
    // fades out questions
    $('.container').fadeOut(500);
    // answerScreen
    $('#answerScreen').show();
    // correctAnswers
    $('#correctScreen').append(correctAnswers);
    // wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); 