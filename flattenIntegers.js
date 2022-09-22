function flattenIntegers(input, num) {
    console.log('input'+num+' :',input);    
    let stringArray = input.toString();
    let arrayString = JSON.parse("["+stringArray+"]");
    console.log('output : ',arrayString);
    console.log(" ")
    console.log(" ")
}

let input1 = [[1,2],[3,4],5,[6,7],8,9,10];
flattenIntegers(input1, 1);

let input2 = [[1,1],2,[1,1]];
flattenIntegers(input2, 2);

let input3 = [[1], [2, 3], [4, 5, 6, 7]]
flattenIntegers(input3, 3);

