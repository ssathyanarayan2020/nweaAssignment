function flattenIntegers_recursively(input, num) {
    console.log('input'+num+' :',input);    
   
    const flattened = input.flat(Infinity);

    console.log('output : ',flattened);
    console.log(" ")
    console.log(" ")
 }



let input1 = [[1,2],[3,4],5,[6,7],8,9,10];
flattenIntegers_recursively(input1, 1);

let input2 = [[1,1],2,[1,1]];
flattenIntegers_recursively(input2, 2);

let input3 = [[1], [2, 3], [4, 5, 6, 7]]
flattenIntegers_recursively(input3, 3);

