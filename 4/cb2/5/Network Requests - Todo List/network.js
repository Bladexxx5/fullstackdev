async function fetchTodos(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem fetching the todos:', error);
      throw error;
    }
  }
  
  async function main() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
      const todos = await fetchTodos(url);
      console.log(todos);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();
  