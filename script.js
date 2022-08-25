const quizDB = [
    {
    question: "Q1: what is full form of HTML?",
    a: "hello to MY land",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4"

},

{
    question: "Q2: what is full form of SQL?",
    a: "Structured Query Language",
    b: "Struct Query Language",
    c: "Structure question Language",
    d: "Structure Query List",
    ans: "ans1"

},

{
    question: "Q3: what is full form of JS?",
    a: "Java Struct",
    b: "Java Structure",
    c: "Java Syntax",
    d: "Java Script",
    ans: "ans4"

},

{
    question: "Q4: what is full form of CSS?",
    a: "Cascading Style Sheets",
    b: "cascading steal sheet",
    c: "casatte styling sheet",
    d: "costly style sheets",
    ans: "ans1"
}
]




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.getElementsByClassName('answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score=0;

const loadQustions = () =>{

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQustions();

const getCheckAnswer = () => {
    let answer;
    Array.from(answers).forEach(ele => {
        if(ele.checked){
            answer = ele.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    if(questionCount < quizDB.length ){
        loadQustions();
    }
    else{
        showScore.innerHTML = `<h3>You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">play again</button>`;


            showScore.classList.remove('scoreArea');
    }
});