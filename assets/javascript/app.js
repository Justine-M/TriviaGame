$('#start').on('click', function () {
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
})

$(document).on('click', '#reset', function () {
    game.reset();
})

var questions = [{
    question: "What is the name of Harry Potter's owl?",
    answers: ["Crookshanks", "Scabbers", "Hedwig", "Nagini"],
    correctAnswer: "Hedwig",
    image: "assets/images/hedwig.jpg"
}, {
    question: "What is the name of Harry's best friend?",
    answers: ["Hermione Granger", "Ronald Weasley", "Draco Malfoy", "Hagrid"],
    correctAnswer: "Ronald Weasley",
    image: "assets/images/ronald.jpg"

}, {
    question: "Who is Harry's arch nemesis?",
    answers: ["Bellatrix Lestrange", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"],
    correctAnswer: "Lord Voldemort",
    image: "assets/images/voldemort.jpg"
}, {
    question: "What is Lord Voldemort's birth name?",
    answers: ["Tom Marvolo Riddle", "Barty Crouch Jr.", "Newt Scamander", "Peter Pettigrew"],
    correctAnswer: "Tom Marvolo Riddle",
    image: "assets/images.riddle.jpg"
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Times Up!");
            game.timeUp();
        }

    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html("<h2> TIME REMAINING: <span id='counter'>30</span> Seconds</h2>");
        $('#subwrapper').append('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $('#subwrapper').append('<button class="answer-button" id="button- ' +i+ '" data-name="' + questions[game.currentQuestion].answers[i]+ '">' + questions[game.currentQuestion].answers[i] + '</button>');
            

        }


    },
    nextQuestion: function () {
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function () {
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html('<h2> SORRY OUT OF TIME! </H2>');
        $('#subwrapper').append('<h3> The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);

        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);

        }

    },
    results: function () {
        clearInterval(timer);
        $('#subwrapper').html('<h2>YOU ARE FINISHED!</h2>');
        $('#subwrapper').append('<h3>Correct: ' + game.correct + "</h3>");
        $('#subwrapper').append('<h3>Incorrect: ' + game.incorrect + "</h3>");
        $('#subwrapper').append('<h3>Unanswered: ' + game.unanswered + "</h3>");
        $('#subwrapper').append("<button id='reset'>RESET</button");


    },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }


    },
    answeredCorrectly: function () {
        console.log("Right");
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html('<h2> YOU ARE CORRECT! </h2>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);

        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);

        }

    },
    answeredIncorrectly: function () {
        console.log("wrong");
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html('<h2> YOU ARE INCORRECT! </h2>');
        $('#subwrapper').append('<h3> The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3 * 1000);

        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);

        }

    },
    reset: function () {
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    },


}





























    // var timer = 30;

    // //  Variable that will hold our interval ID when we execute
    // //  the "run" function
    // var intervalId;

    // //  The run function sets an interval
    // //  that runs the decrement function once a second.
    // //  *****BUG FIX******** 
    // //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    // function run() {
    //   clearInterval(intervalId);
    //   intervalId = setInterval(decrement, 1000);
    // }

    // //  The decrement function.
    // function decrement() {

    //   //  Decrease number by one.
    //   timer--;

    //   //  Show the number in the #show-number tag.
    //   $("#timer").html("<h2>" + timer + "</h2>");


    //   //  Once number hits zero...
    //   if (timer === 0) {

    //     //  ...run the stop function.
    //     stop();

    //     //  Alert the user that time is up.
    //     alert("Time Up!");
    //   }
    // }

    // //  The stop function
    // function stop() {

    //   //  Clears our intervalId
    //   //  We just pass the name of the interval
    //   //  to the clearInterval function.
    //   clearInterval(intervalId);
    // }

    // //  Execute the run function.
    // run();
    // var number;
    // var t;
    // var i = 0;
    // var j = 0;
    // var right = 0;
    // var wrong = 0;
    // var unanswered = 0;
    // //  Variable that will hold our interval ID when we execute
    // //  the "start" function
    // var intervalId;

    // var questions = ["Name the largest freshwater lake in the world?", "Where would you find the Sea of Tranquility?",
    //   "What item of clothing was named after its Scottish inventor?", "What kind of weapon is a falchion?"];

    // var rightanswers = ["Lake Superior", "The Moon", "A Mackintosh", "A sword"];

    // var wronganswers = ["Titicaca Lake", "The Dead Sea", "The Great Lakes", "Jupiter", "Mars", "Venus", "A sleeveless hoodie", " Cropped vests", "The scoodie", "antiaircraft gun", "Big Bertha", "Panzerfaust"];

    // $(document).ready(function () {
    //   //When clicked start button, a question with four choices show up
    //   //Time start counting down from 60 seconds
    //   $("#start").on("click", start);

    //   function start() {
    //     $("#start").remove();
    //     $("#triviacontent").html(" ");
    //     $("#triviacontent").append("<div id='question'></div>");
    //     $("#triviacontent").append("<div id='incorrect'></div>");
    //     $("#triviacontent").append("<div id='correct'></div>");

    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    //     number = 50;

    //     $("#question").html("<p>"+ questions[i] + "<p>");
    //     $("#incorrect").html("<button>"+ wronganswers[j]+"</buttton> <br>"+ "<button>"+ wronganswers[j+1]+"</buttton> <br>"+ "<button>"+ wronganswers[j+2]+"</buttton>");
    //     $("#correct").html("<button>"+ rightanswers[i]+"</button>");

    //     $("#incorrect").on("click", incorrect);
    //     $("#correct").on("click", correct);
    //   }

    //   //  The decrement function.
    //   function decrement() {

    //     //  Decrease number by one.
    //     number--;

    //     //  Show the number in the #show-number tag.
    //     $("#show-number").html("<h2>Time remaining: " + number + "seconds </h2>");


    //     //  Once number hits zero...
    //     if (number === 0) {

    //       //  ...run the stop function.
    //       stop();

    //     }
    //   }

    //   function stop() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrease, 1000);
    //     t = 3;

    //     $("#show-number").html("<h2>Time is up!<h2>");
    //     $("#triviacontent").html("<h3> The correct answer was:" +" "+ rightanswers[i] +"</h3>");
    //     i++;
    //     j=j+3;
    //     unanswered ++;

    //     //All question answered; time stops counting down
    //   if (i === 4) {
    //     clearInterval(intervalId);

    //      //Button: "Start over?", when clicked it goes to the first question again
    //   $("#triviacontent").empty();

    //     //will show the number of correct/incorrect/unanswered questions
    //     $("#triviacontent").html("<p> Correct:"+ right + "<p>"+"<p> Incorrect:"+ wrong + "<p>" + "<p> Unanswered:"+ unanswered + "<p>" ); 

    //     $("#triviacontent").append("<button id='again'> Start Over?</button>");
    //     i = 0;

    //     $("#again").on("click", start);
    //   }

    //   }
    //   //When the wrong answer is clicked, showing the right answer; "Nope"
    //   //the remaining time stops counting down; after 10 seconds it moves on to the next question

    //   function incorrect(){
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrease, 1000);
    //     t = 3;

    //     $("#show-number").html("<h2>Time remaining: " + number + "seconds </h2>");
    //     $("#triviacontent").html("<h3> You are wrong. </h3>" +"<h3>The correct answer was:" +" " + rightanswers[i]+"</h3>");

    //     i++;
    //     j=j+3;
    //     wrong ++;

    //     //All question answered; time stops counting down
    //   if (i === 4) {
    //     clearInterval(intervalId);

    //       //Button: "Start over?", when clicked it goes to the first question again
    //   $("#triviacontent").empty();

    //   //will show the number of correct/incorrect/unanswered questions
    //   $("#triviacontent").html("<p> Correct:"+ right + "<p>"+"<p> Incorrect:"+ wrong + "<p>" + "<p> Unanswered:"+ unanswered + "<p>" ); 

    //   $("#triviacontent").append("<button id='again'> Start Over?</button>");

    //     i = 0;

    //     $("#again").on("click", start);
    //   }

    //   }

    //   //  The decrement function.
    //   function decrease() {

    //     //  Decrease number by one.
    //     t--;

    //     //  Once t hits zero...
    //     if (t === 0 && i !== 4) {

    //       //  ...run the start function.
    //       start();

    //     }
    //   }

    //   //When the right answer is clicked. It shows"correct!"
    //   //the remaining time stops counting down; after 5 seconds, it moves to the next question

    //   function correct(){
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrease, 1000);
    //     t = 3;

    //     $("#show-number").html("<h2>Time remaining: " + number + "seconds </h2>");
    //     $("#triviacontent").html("<h3>Correct!</h3>");

    //     i++;
    //     j=j+3;
    //     right ++;

    //     //All question answered; time stops counting down
    //   if (i === 4) {
    //     clearInterval(intervalId);

    //       //Button: "Start over?", when clicked it goes to the first question again
    //   $("#triviacontent").empty();

    //   //will show the number of correct/incorrect/unanswered questions
    //   $("#triviacontent").html("<p> Correct:"+ right + "<p>"+"<p> Incorrect:"+ wrong + "<p>" + "<p> Unanswered:"+ unanswered + "<p>" ); 

    //   $("#triviacontent").append("<button id='again'> Start Over?</button>");

    //     i = 0;

    //     $("#again").on("click", start);
    //   }

    //   }




    // });












