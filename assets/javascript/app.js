// $(document).ready(function () {

var gameOptions = [
        {
            quesion: "What is the name of Harry Potter's owl?",
            answers: ["Crookshanks", "Scabbers", "Hedwig", "Nagini"],
            correct: ["2"]
        },
        {
            quesion: "What is the name of Harry's best friend?",
            answers: ["Hermione Granger", "Ronald Weasley", "Draco Malfoy", "Hagrid"],
            correct: ["1"]
        },
        { 
            quesion: "Who is Harry's arch nemesis?",
            answers: ["Bellatix Lestrange", "Albus Dumbledore", "Lord Voldemort", "Severus Snape"],
            correct: ["2"]

        },
        {
            quesion: "What is Lord Voldemort's birth name?",
            answers: ["Barty Crouch Jr.", "Newt Scamander", "Peter Pettigrew", "Tom Marvolo Riddle"],
            correct: ["3"]

        }
    ]

  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var timer = 60
  var intervalId;
  var userGuess = "";
  var timerRunning = false;

  // This initializes the button that starts the game 
 $("#start").on("click", function (){
    // when the start button clicked, the div with the questions that was hidden is shown
            $('displaygame').show();
            console.log('hello');
    
            $(this).hide();
        });

