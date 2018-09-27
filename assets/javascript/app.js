$(document).ready(function () {
    var theQuotes = [{   
        quote: "I got a bad feeling about this.",
        answers:["Resistance","Empire"],
        correctAnswer: 0
        },
        {
        quote: "You must do what you feel is right.",
        answers:["Resistance","Empire"],
        correctAnswer: 0
        },
        {
        quote: "I find your lack of faith disturbing.",
        answers: ["Resistance","Empire"],
        correctAnswer: 1
        },
        {
        quote: "Aren't you a little short for a storm trooper?",
        answers: ["Resistance","Empire"],
        correctAnswer: 0
        },
        {quote:"If you strike me down I shall become more powerful than you can possibly imagine.",
        answers: ["Resistance","Empire"],
        correctAnswer: 2
        } 
];


//variables to hold needed information

var correct = 0
var incorrect = 0

function startGame() {

    //to begin only the start button should show

    $("#quiz").hide()
    $("#start-button").show()
    //results

    $("#start-button").hide() //start button should go away after clicked
    //start timer and quiz
    run()
    go()

    $("#start-button").on("click", function(){
        $("#start-button").hide
    })
}


var timeRemaining = 30
var intervalID

function run() {
    clearInterval(intervalID)
    intervalID = setInterval(decrement, 1000)
}

function decrement(){
    timeRemaining--;
    $("#timer").html("<h3>Time remaining: " + timeRemaining)
    
    if (timeRemaining === 0){
        $("#timer").html("<h3>Like the Death Star, your time has ceased to be.</h3>")
        stop()
    }
}

function stop() {
    $("#submit").on("click", function () {
        clearInterval(intervalID);
        $("#quiz").hide()
        
        score() 
    })
}
    
startGame()
stop()

})











