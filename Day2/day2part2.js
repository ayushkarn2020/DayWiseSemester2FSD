const values = [13, 6, 21, 8, 17, 2, 25, 10];

values.forEach(function(item){

    console.log(item);

});



const plusThree = values.map((item)=>{

    return item + 3;

});

console.log(plusThree);



const oddNums = values.filter(function(item){

    return item % 2 != 0;

});

console.log(oddNums);



const finalAns = values.reduce((x,y)=>{

    return x * y;

},1);

console.log(finalAns);