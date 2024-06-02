function printName() {
    let helloName = "Hello John";
    
    function inner() {
      return helloName;
    }
    
    return inner;
  }
  
  const getHelloName = printName();
  setTimeout(() => {
    console.log(getHelloName());
  }, 1000); 
  