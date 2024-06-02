function multiplyByTwo(input) {
  let number = 2;
  
  function inner() {
    return input * number;
  }
  
  return inner;
}

console.log(multiplyByTwo(4)()); 
