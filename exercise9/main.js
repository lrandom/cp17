/*const btnNext = document.querySelector('.form-1 .btn-next');
btnNext.addEventListener('click',function (){
    //Ẩn form 1
    const form1 = document.querySelector('.form-1');
    form1.classList.add('hide');
    const form2 = document.querySelector('.form-2');
    form2.classList.remove('hide');
})

const btnNext2 = document.querySelector('.form-2 .btn-next');
btnNext2.addEventListener('click',function (){
    const form2 = document.querySelector('.form-2');
    form2.classList.add('hide');
    const form3 = document.querySelector('.form-3');
    form3.classList.remove('hide');
})*/

//Tối ưu
function next(startPoint) {
    const btnNext = document.querySelector(`.form-${startPoint} .btn-next`);
    btnNext.addEventListener('click',function (){
        //Ẩn form 1
        const form1 = document.querySelector(`.form-${startPoint}`);
        form1.classList.add('hide');
        const form2 = document.querySelector(`.form-${startPoint+1}`);
        form2.classList.remove('hide');
    })
}
next(1);
next(2);
