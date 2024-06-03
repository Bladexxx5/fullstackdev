const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


const { id, firstName: name = 'Unknown', lastName: surname = 'Unknown', age: old = 0 } = person;

console.log(id, name, surname, old); 
