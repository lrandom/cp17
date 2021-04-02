const button = document.querySelector('button');
button.addEventListener('click',function () {
    const lis = document.querySelectorAll('li');
    const ul = document.querySelector('body > ul:nth-child(2)');
    const firstUl = document.querySelector('ul');
    for (let i = 0; i < lis.length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = lis[i].innerText;
        ul.append(newLi);
    }
})
