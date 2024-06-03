const number = 15;

const checkNumber = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("The number is greater than 10");
  } else {
    reject("The number is 10 or less");
  }
});

checkNumber
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });
