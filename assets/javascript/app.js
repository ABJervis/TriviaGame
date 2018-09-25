


$(document).ready(function () {
    var theQuotes = [{   
        quote: "I got a bad feeling about this.",
        answers:["Resistance","Empire"],
        correctAnswer: "Resistance"
        },
        {
        quote: "You must do what you feel is right.",
        answers:["Resistance","Empire"],
        correctAnswer: "Resistance"
        },
        {
        quote: "I find your lack of faith disturbing.",
        answers: ["Resistance","Empire"],
        correctAnswer: "Empire"
        },
        {
        quote: "Aren't you a little short for a storm trooper?",
        answers: ["Resistance","Empire"],
        correctAnswer: "Resistance"
        },
        {quote:"If you strike me down I shall become more powerful than you can possibly imagine.",
        answers: ["Resistance","Empire"],
        correctAnswer: "Empire"
        } 
];


//variables to hold needed information

var correct = 0;
var wrong = 0;
var unanswered =0;

//timer
var time = 30;
var intervalID;

$("#start-button").on("click", run); //on click not associating with button click, but rather with page load

function run(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement,1000);
}

function decrement() {
    time--;

    $("#timer-space").html("<h3>" + "Time Remaining: " + time + "</h3>");
    console.log(time)

    if (time === 0){
        
        stop();

        alert("Time Up"); //do a show results here rather than times up alert
    }
}

function stop(){
    clearInterval(intervalID);
}

run();

//get questions on page - html

function showQuestions(){    
    $(theQuotes).show().on("click")
}
  

    //put in radio buttons







})







