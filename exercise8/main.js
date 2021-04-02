const button = document.querySelector('button');
button.addEventListener('click',function () {
   let lis = document.querySelectorAll('li');
   //console.log(lis);
   let a = [];
    for (let i = 0; i < lis.length; i++) {
        a.push(parseInt(lis[i].innerText));
    }

    for (let i = 0; i < a.length-1; i++) {
        for (let j = i+1; j < a.length ; j++) {
            if(a[i]>
                a[j]){
                //swap
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }



    const ul = document.querySelector('body ul:nth-child(2)');
    for (let i = 0; i < a.length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = a[i];
        ul.append(newLi);
    }
})
