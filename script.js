$(document).ready(function()
{
    $('#choiceField').hide();
    $('#startBtn').click(function()
    {
        $('#startBtn').hide();
        $('#choiceField').slideDown(1500);
    });
})

var myQue = 
[
    {
        question : "HOW LONG DOES IT TAKE FOR LIGHT FROM THE SUN TO REACH EARTH?",
        answer : {
            a: '1 Minute',
            b: '8 Minute',
            c: 'Instantaneous',
            d: '24 Hours'
        },
        correctAnswer: 'b'
    },
];

var astronomyQueContainer = document.getElementsByClassName("astronomyQue");
var finishBtnContainer = document.getElementsByClassName("finishBtn");
var resultContainer = document.getElementsByClassName("result");

generateQuiz(question , astronomyQueContainer , finishBtnContainer , resultContainer);

function generateQuiz(question , astronomyQueContainer , finishBtnContainer , resultContainer)
{
    function showQue(question , astronomyQueContainer)
    {
        var output = [];
        var answer;
        
        //for each questions

        for (var i=0 ; i < question.length ; i++)
        {

            // first reset the list of answers
            answer = [];

            // for each available answer...
            for(letter in ques[i].answers)
            {
                // ...add an html radio button
                answers.push(
                '<label>' + '<input type="radio" name="ques'+i+'" value="' +letter+'">' + letter + ': ' + question[i].answer[letter] + '</label>'
                );
            }
            // add this question and its answers to the output
            output.push('<div class="question">' + question[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
        }
        // finally combine our output list into one string of html and put it on the page
        astronomyQueContainer.innerHTML = output.join('');
    }
}






// function showResults(questions, quizContainer, resultsContainer){
    
//     // gather answer containers from our quiz
//     var answerContainers = quizContainer.querySelectorAll('.answers');
    
//     // keep track of user's answers
//     var userAnswer = '';
//     var numCorrect = 0;
    
//     // for each question...
//     for(var i=0; i<questions.length; i++){

//       // find selected answer
//       userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
//       // if answer is correct
//       if(userAnswer===questions[i].correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;
        
//         // color the answers green
//         answerContainers[i].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[i].style.color = 'red';
//       }
//     }

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//   }

//   // show questions right away
//   showQuestions(questions, quizContainer);
  
//   // on submit, show results
//   submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer);
//   }

// }