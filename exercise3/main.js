const button = document.querySelector('button');
button.addEventListener('click',function () {
    const lis = document.querySelectorAll('li');
    const length = lis.length;
    //lấy về phần tử cuối
    const lastLi = document.querySelector('ul li:nth-child('+length+')');
    //xoá
    lastLi.remove();


})
