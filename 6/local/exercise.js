// exercise.js

const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
    console.log('Usuario guardado en localStorage exitosamente.');
  } catch (error) {
    console.error('Error al guardar el usuario en localStorage:', error);
  }
}

saveUserToLocalStorage(user);
