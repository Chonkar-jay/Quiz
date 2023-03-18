$(document).ready(function()
{
    $('#choiceField').hide();
    $('#startBtn').click(function()
    {
        $('#startBtn').hide();
        $('#choiceField').slideDown(1500);
    });
})





const quizDB = [
    {
        question: "HOW LONG DOES IT TAKE FOR LIGHT FROM THE SUN TO REACH EARTH?",
        a: "1 Minute",
        b: "8 Minute",
        c: "Instantanious",
        d: "24 Hours",
        ans: "ans4"
    },
    {
        question: "IN 2007, VOYAGER 2 CROSSED THE HELIOSHEATH BOUNDARY AND INTO THE VAST REGION AT THE EDGEOF OUR SOLAR SYSTEM WHERE THE SOLAR WIND RUNS UP AGAINST THE THIN GAS BETWEEN THE STARS. WHAT DID THIS CROSSING CONFIRM ABOUT THE SHAPE OF OUR SOLAR SYSTEM? ",
        a: "Its round",
        b: " Its squashed",
        c: "Its like a donut",
        d: "Its a horseshoe shape",
        ans: "ans4"
    },
    {
        question: "IT TAKES THE SUN 225-250 MILLION YEARS TO DO A SINGLE REVOLUTION OF THE MILKY WAY GALAXY. HOW FAST DOES THE SUN TRAVEL? ",
        a: " 220km in a second",
        b: " 220km in a minute",
        c: " 220km in a hour",
        d: " 220km in a year",
        ans: "ans4"
    },
    {
        question: "ARE THE ORBITS OF THE PLANETS ON THE SAME PLANE?",
        a: " Yes, more or less",
        b: "No, they re all over the place",
        // c: "c )",
        // d: "d )",
        ans: "ans4"
    },
    {
        question: "THE IMMEDIATE GALACTIC AREA AROUND OUR SOLAR SYSTEM IS A CLOUD KNOWN AS THE LOCAL FLUFF WHICH IS WITHIN AN OTHERWISE SPARSE REGION CALLED THE LOCAL BUBBLE.",
        a: "True",
        b: "False",
        // c: "c )",
        // d: "d )",
        ans: "ans4"
    }
];
// document.write(quizDB[0]);
const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
let questionNum = 0;
let score = 0;
.............................................................
const loadQuestion = () => {
    const questionList = quizDB[questionNum];
    
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getcheckAns = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
            score++;
        }
    });
    return answer;
}
submit.addEventListener('click', () => {
    const checkAns = getcheckAns();
    console.log(checkAns);
    
    if(checkAns === quizDB[questionNum].ans)score++;{
        questionNum++; 
    };

    // questionNum++;
    if(questionNum < quizDB.length)
        loadQuestion();
    else
    {
        question.innerHTML =`<center style="margin-top:20%;color:white;">You answered ${score}/${quizDB.length} questions correctly.`
        
    }

})
// if(questionNum===quizDB.length){
//     document.getElementById("result").innerHTML("Pass................");

// }