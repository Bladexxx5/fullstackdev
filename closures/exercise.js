function printName() {
    let helloName = "Hello John";
    
    function inner() {
      return helloName;
    }
    
    return inner;
  }
  
  const getHelloName = printName();
  console.log(getHelloName());
  
