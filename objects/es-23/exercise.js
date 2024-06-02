const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

Object.keys(person).forEach(key => {
  console.log(person[key]);
});
