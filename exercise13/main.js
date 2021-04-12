const arr = [
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
let group =[];

let index = 0;
while(arr.length>0) {
    index++;
    let temp = [arr[0]];
    let removeIndex = [0];
    for (let j = 1; j < arr.length; j++) {
        if (temp[0].brand == arr[j].brand) {
            temp.push(arr[j]);
            removeIndex.push(j);
        }
    }

    //console.log("Lần"+index);
    //console.log(removeIndex);
    group.push(temp);
    for (let j = 0; j < removeIndex.length; j++) {
        arr.splice(removeIndex[j], 1);
    }
    console.log(arr);
}


console.log(group);

