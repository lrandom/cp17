const button = document.querySelector('button');
button.addEventListener('click',function () {
    //dùng query selector để chọn li
    //const lis = document.querySelectorAll('body ul:nth-child(1) > li > ul li');

    //không dùng query selector
    const firstUL = document.getElementsByTagName('ul')[0];
    const childLis = firstUL.children;
    const lis  = childLis[0].getElementsByTagName('li');

    const ul = document.querySelector('body > ul:nth-child(3)');
    for (let i = 0; i < lis.length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = lis[i].innerText;
        ul.append(newLi);
    }

})
