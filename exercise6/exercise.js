function printName() {
    let helloName = "Hello John"; // Variable defined within the outer function
  
    function inner() {
      return helloName; 
    }
  
    return inner; 
  }
  
  const innerFunction = printName(); 
  console.log(innerFunction()); 
  
