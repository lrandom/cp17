let arr = [
    {
        brand: 'Huyndai',
        model:'Santafe'
    },{
        brand: 'Huyndai',
        model:'Sonata'
    },{
        brand: 'Vinfast',
        model:'Lux SA'
    },{
        brand: 'Toyota',
        model:'Camry'
    },{
        brand:'Vinfast',
        model:'Lux A'
    },{
        brand:'Toyota',
        model:'Vios'
    }]
/* const arr2= [
     ["Santafe","Sonata"],
     ["Lux Sa","Lux A"],
     ["Camry","Vios"]
  ]*/
//mang trong js là mảng động
let group =[]
while(arr.length>0) {
    let clone =arr[0];
    delete arr[0];
    let temp = [clone];
    for (let j = 1; j < arr.length; j++) {
        if (clone.brand == arr[j].brand) {
            let clone = arr[j];
            temp.push(clone);
            delete arr[j];
        }
    }

    group.push(temp);
    let tfArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!=undefined) {
            tfArr.push(arr[i])
        }
    }

    console.log(arr);
    arr = tfArr;
}

console.log(group);

