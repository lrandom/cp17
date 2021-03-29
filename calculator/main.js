function getResult(operate) {
    const num1 = document.querySelector('.num-1').value;
    const num2 = document.querySelector('.num-2').value;

    let result = 0;
    switch (operate) {
        case "plus":
            result = parseInt(num1) + parseInt(num2);
            break;

        case "multiple":
            result = parseInt(num1) * parseInt(num2);
            break;

        case "divide":
            result = parseInt(num1) / parseInt(num2);
            break;

        case "sub":
            result = parseInt(num1) - parseInt(num2);
            break;
    }

    document.querySelector('#result').innerText = result;
}
