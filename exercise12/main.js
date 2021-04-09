const questions = [
    {
        content:'Sông nào chảy qua Hà Nội',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/MatnuocSongHong-06112008333.JPG',
        correctAnswer:'Sông Hồng',
        maxShowingCharacter:2
    },
    {
        content:'Ai là người phát minh ra bóng đèn sợi đốt',
        image: 'https://st.quantrimang.com/photos/image/2016/10/25/thomsa-edison-4.jpg',
        correctAnswer:'Edison',
        maxShowingCharacter:2
    },
    {
        content:'Nguời giàu nhất thế giới ',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
        correctAnswer:'Jezz Bezos',
        maxShowingCharacter:2
    },
    {
        content:'Thủ đô của Belarus',
        image: '',
        correctAnswer: 'Minsk',
        maxShowingCharacter: 3
    }
]

let questionIndex = 0;
let correctAnswer = '';
function loadQuestion() {
    const question = questions[questionIndex];
    correctAnswer = question.correctAnswer.replace(' ', '');
    correctAnswer = correctAnswer.toUpperCase();
    const questionUI = document.querySelector('.question');
    questionUI.innerHTML ='';
    const pUI = document.createElement('p');
    pUI.innerText = question.content;
    questionUI.append(pUI);
    const image = question.image;

    if (image) {
        const imageUI = document.createElement('img');
        imageUI.setAttribute('src', image);
        imageUI.classList.add('image');
        questionUI.append(imageUI);
    }

    const answerUI = document.querySelector('.answer');
    answerUI.innerHTML='';
    let maxShowingCharacter = question.maxShowingCharacter;
    let maxShowingCharacterCount = 0;
    const notificationUI = document.querySelector('.notification');
    notificationUI.innerHTML = `Bạn được quyền lật ${maxShowingCharacter} ô`;
    for (let i = 0; i < correctAnswer.length; i++) {
        const char = correctAnswer.charAt(i);
        let divBlock = document.createElement('div');
        divBlock.classList.add('block');

        let divText = document.createElement('div');
        divText.classList.add('text');
        divText.innerText = char;

        let divCover = document.createElement('div');
        divCover.classList.add('cover');
        divCover.addEventListener('click', function () {
            maxShowingCharacterCount++;
            if (maxShowingCharacterCount <= maxShowingCharacter) {
                divCover.style.display = 'none';
                notificationUI.innerHTML = `Bạn được quyền lật ${maxShowingCharacter - maxShowingCharacterCount} ô`;
            }
        })

        divBlock.append(divText);
        divBlock.append(divCover);

        answerUI.append(divBlock);
    }
}



const displayAllBlock = function () {
    const allBlocks = document.querySelectorAll('.answer >div');
    for (let i = 0; i < allBlocks.length; i++) {
        const block = allBlocks[i];
        block.querySelector('.cover').style.display = 'none';
    }
}

const nextButton = document.querySelector('.user-answer button');
const handleClick = function () {
    const inputValue = document.querySelector('.user-answer input').value;
    if (inputValue.replace(' ', '').toUpperCase() == correctAnswer) {
        alert("Bạn trả lời đúng");
        displayAllBlock();

        let countdown = 3;
        const countDownUI = document.querySelector('.countdown');
        const countDownToNext = setInterval(()=>{
            countdown--;
            countDownUI.innerHTML = "Bạn sẽ được chuyển sang câu tiếp theo trong "+countdown+" giây";

        },1000);

        setTimeout(()=>{
            clearInterval(countDownToNext);
            countDownUI.innerHTML = "";
            questionIndex++;
            loadQuestion();
        },3000);
    } else {
        alert("Bạn trả lời sai")
    }
}
nextButton.addEventListener('click',handleClick);
loadQuestion();
