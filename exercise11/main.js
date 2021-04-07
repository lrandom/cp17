const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers:[
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer:0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers:[
            "A.Mianma",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer:3
    }
]

//câu thứ nhất
let totalScore = 0;
const scoreEchCorrectAnswer = 10;
let questionIndex = 0;

function loadQuestion() {
    const question = questions[questionIndex];
    const questionUI = document.querySelector('.wrapper .question');
    questionUI.innerHTML = question.content;
    const answersUI = document.querySelector('.wrapper .answers');
//làm rỗng
    answersUI.innerHTML = '';
    const answers = question.answers; //trả về một mảng đáp án
    const correctAnswer = question.correctAnswer;
    for (let i = 0; i < answers.length; i++) {
        let newElem = document.createElement(`div`);
        newElem.classList.add('answer');
        newElem.innerHTML = answers[i];
        newElem.addEventListener('click', function () {
            if (i == correctAnswer) {
                alert("Bạn đã trả lời đúng");
                totalScore += scoreEchCorrectAnswer;
                const scoreUI = document.querySelector('.score span');
                scoreUI.innerHTML = totalScore;
                questionIndex++;
                if(questionIndex>=questions.length){
                    alert("Bạn đã hoàn thành bài test");
                    return;
                }
                loadQuestion();
            } else {
                alert("Bạn đã trả lời sai");
                answersUI.innerHTML='';

            }
        })
        answersUI.append(newElem);
    }
}


//tải question lần đầu tiên
loadQuestion();
