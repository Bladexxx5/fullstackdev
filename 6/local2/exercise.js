
function saveUserToLocalStorage(user) {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
    console.log('Usuario guardado en localStorage exitosamente.');
  } catch (error) {
    console.error('Error al guardar el usuario en localStorage:', error);
  }
}

function getUserFromLocalStorage() {
  try {
    const userJSON = localStorage.getItem('user');
    if (userJSON === null) {
      console.log('No se encontró ningún usuario en localStorage.');
      return;
    }
    const user = JSON.parse(userJSON);
    console.log('Datos del usuario recuperados de localStorage:', user);
  } catch (error) {
    console.error('Error al recuperar el usuario de localStorage:', error);
  }
}

const user = {
  id: 1,
  name: "John",
  age: 25,
};

saveUserToLocalStorage(user);
getUserFromLocalStorage();
