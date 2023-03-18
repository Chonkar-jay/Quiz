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
            for(letter in ques[i].answer)
            {
                // ...add an html radio button
                answer.push(
                '<label>' + '<input type="radio" name="ques'+i+'" value="' +letter+'">' + letter + ': ' + question[i].answer[letter] + '</label>'
                );
            }
            // add this question and its answers to the output
            output.push('<div class="question">' + question[i].question + '</div>' + '<div class="answer">' + answer.join('') + '</div>');
        }
        // finally combine our output list into one string of html and put it on the page
        astronomyQueContainer.innerHTML = output.join('');

        function showResults(question, astronomyQueContainer, resultContainer)
        {
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answer');
            
            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;
    
            // for each question...
            for(var i=0; i<question.length; i++)
            {

                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
                // if answer is correct
                if(userAnswer===question[i].correctAnswer)
                {
                    // add to the number of correct answers
                    numCorrect++;
        
                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else
                {
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }

            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + question.length;
        }

        // show questions right away
        showQuestions(question, astronomyQueContainer);
  
        // on submit, show results
        submitButton.onclick = function()
        {
            showResults(question, astronomyQueContainer, resultsContainer);
        }

    }


            
}




// const quizDB = [
//     {
//         question: "Q1: * ",
//         a: "a )",
//         b: "b )",
//         c: "c )",
//         d: "d )",
//         ans: "ans4"
//     },
//     {
//         question: "Q2: ** ",
//         a: "a )",
//         b: "b )",
//         c: "c )",
//         d: "d )",
//         ans: "ans4"
//     },
//     {
//         question: "Q3: *** ",
//         a: "a )",
//         b: "b )",
//         c: "c )",
//         d: "d )",
//         ans: "ans4"
//     },
//     {
//         question: "Q4: **** ",
//         a: "a )",
//         b: "b )",
//         c: "c )",
//         d: "d )",
//         ans: "ans4"
//     },
//     {
//         question: "Q5: ***** ",
//         a: "a )",
//         b: "b )",
//         c: "c )",
//         d: "d )",
//         ans: "ans4"
//     }
// ];
// const question = document.querySelector('.question');
// const option1 = document.querySelector('#option1');
// const option2 = document.querySelector('#option2');
// const option3 = document.querySelector('#option3');
// const option4 = document.querySelector('#option4');
// const submit = document.querySelector('#submit');
// const answers = document.querySelectorAll('.answer');
// let questionNum = 0;
// let score = 0;
// const loadQuestion = () => {
//     const questionList = quizDB[questionNum];
    
//     question.innerText = questionList.question;
//     option1.innerText = questionList.a;
//     option2.innerText = questionList.b;
//     option3.innerText = questionList.c;
//     option4.innerText = questionList.d;
// }
// loadQuestion();
// const getcheckAns = () => {
//     let answer;
//     answers.forEach((curAnsElem) => {
//         if(curAnsElem.checked){
//             answer = curAnsElem.id;
//         }
//     });
//     return answer;
// }
// submit.addEventListener('click', () => {
//     const checkAns = getcheckAns();
//     console.log(checkAns);

//     if(checkAns === quizDB[questionNum].ans){
//         score++;
//     };

//     questionNum++;
//     if(questionNum < quizDB.length){
//         loadQuestion();
//     }

// })



    
    
    
    