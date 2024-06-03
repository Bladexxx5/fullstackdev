const isLogged = true;

const checkLoggedStatus = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    reject("User is not logged in");
  }
});

const checkRandomNumber = (randomNumber) => {
  return new Promise((resolve, reject) => {
    if (randomNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("Random number is less than or equal to 0.5");
    }
  });
};

checkLoggedStatus
  .then(randomNumber => {
    console.log("Random number:", randomNumber);
    return checkRandomNumber(randomNumber);
  })
  .then(userData => {
    console.log("Final object:", userData);
  })
  .catch(error => {
    console.error("Error:", error);
  });
