const button = document.querySelector('button');
button.addEventListener('click',function () {
   const lis = document.querySelectorAll('li');
   const reverseLis = [];
   for (let i = lis.length-1;i>=0;i--){
       const newLi = document.createElement('li');
       newLi.innerText = lis[i].innerText;
       reverseLis.push(newLi[i]);
       lis[i].remove();
   }
   //lấy phần tử ul
   const ul = document.querySelector('ul');
    for (let i = 0; i < reverseLis.length ; i++) {
        ul.append(reverseLis[i]);
    }

   /*const a = [1,2,3,4,5];*/
   /*const b = [];
    for (let i = a.length-1; i >=0 ; i--) {*/
        /*b[0] = a[4]; //  5-4-1 = 0
        b[1] = a[3]; //  5-3-1 = 1
        b[2] = a[2]; //  5-2-1 = 2
        b[3] = a[1]; //  5-1-1 = 3
        b[4] = a[0]  //  5-0-1 = 4*/
        /*const j = a.length - i - 1;
        b[j] = a[i];*/
    /*}
    console.log(b);*/
})
