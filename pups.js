function flatten_recursively() {
    var flat = [];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            flat.push(...flatten_recursively(...arguments[i]));
        } else {
            flat.push(arguments[i]);
        }
    }
    return flat;
}

console.log(flatten_recursively([1,2,3,[4,5,6,[7,8,9]]],[10,11,12]));
console.log(" ")
console.log(" ")
console.log(flatten_recursively([[1,1],2,[1,1]]));
console.log(" ")
console.log(" ")
console.log(flatten_recursively([[1], [2, 3], [4, 5, 6, 7]]));





