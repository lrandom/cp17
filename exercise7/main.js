const button = document.querySelector('button');
button.addEventListener('click',function () {
    const firstLis = document.querySelectorAll('body ul:nth-child(1) > li');
    const secondLis = document.querySelectorAll('body ul:nth-child(2) > li');
    const ul = document.querySelector('body ul:nth-child(3)');
    for(let i = 0; i<firstLis.length; i++){
        for(let j = 0; j<secondLis.length; j++){
            if(parseInt(firstLis[i].innerText)
                ===parseInt(secondLis[j].innerText)){
                const newLi = document.createElement('li');
                newLi.innerText = firstLis[i].innerText;
                ul.append(newLi);
            }
        }
    }
})
