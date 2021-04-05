const btnNext = document.querySelector('.btn-next');
const ul = document.querySelector('.slide ul');
btnNext.addEventListener('click',function () {

    const length = document.querySelectorAll(`.slide ul li`).length;
    const lastLi = document.querySelector(`.slide ul li:nth-child(${length})`);

    //cách //clone bằng lệnh
    //https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
    const newLi = lastLi.cloneNode(true);

   /**CACH THU CONG
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.attributes.src= newLi.querySelector('img').src;
    li.append(img);
    **/

    ul.prepend(newLi);
    lastLi.remove();
})

const btnPrev = document.querySelector('.btn-prev');
btnPrev.addEventListener('click',function () {

    const length = document.querySelectorAll(`.slide ul li`).length;
    const lastLi = document.querySelector(`.slide ul li:nth-child(1)`);

    //cách //clone bằng lệnh
    //https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
    const newLi = lastLi.cloneNode(true);

    /**CACH THU CONG
     const li = document.createElement('li');
     const img = document.createElement('img');
     img.attributes.src= newLi.querySelector('img').src;
     li.append(img);
     **/

    ul.append(newLi);
    lastLi.remove();
})
