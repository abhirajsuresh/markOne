// import readline-sync and chalk
var readlineSync = require("readline-sync");

const chalk = require("chalk");

// Welcome message
function welcome(){
  var welomeQuestion = readlineSync.question("What is your name? ");

  console.log("Welcome to the game " + chalk.yellow(welomeQuestion) + "!!! Let us see how well do you know Abhiraj through this quiz.");

  console.log(chalk.red("Note: ") + "Please begin each word of your answer in upper-case");

}


// Create the score variable
var score = 0;

// Create array of objects with high scores
var highScores = [{
  name: "Titu",
  score: 4 
},

{
  name: "Kabir",
  score: 3
}
];

// Create the object containg questions for the quiz

var questions = [{
  question: "What is my full name? ",
  answer: "Abhiraj Suresh"
},

{
  question: "In which state was I born? ",
  answer: "Kerala" 
},

{
  question: "Name the TV-Series he is obsessed about. ",
  answer: "Peaky Blinders" 
},

{
  question: "Name the place which serves the best butter chicken in the world as per him. ",
  answer: "Baba's Kitchen" 
},

{
  question: "Name his favorite superhero. ",
  answer: "Batman" 
}
];

// function to define the processing of a question

function playgame(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer){
    console.log("Your answer is correct! ");
    score = score + 1;
  }else{
    console.log("Your answer is incorrect!")
  }
  console.log("Your curret score is: "+ chalk.green(score))
  console.log("----------")
};

// creating a function that repeatedly performs playgame using for loop
function quiz(){
  for (var i = 0; i < questions.length; i = i+1){
    playgame(questions[i].question, questions[i].answer)
    }
};

// high score function 

function scores(){
  console.log("Your grand total is "+ chalk.green(score));

  console.log(highScores);

  console.log(chalk.red("Note: ") + "If you have scored equal or more than the high score, contact Abhiraj");
}

//implementation
welcome()

quiz()

scores()