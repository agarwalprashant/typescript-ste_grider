import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// type Response = { id: number; title: string; completed: boolean };
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(response => {
  const todo = response.data as Todo;
  // const id = todo.id;
  // const title = todo.title;
  // const completed = todo.completed;

  // making use of destructuring in ES6
  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`The todo with ID: ${id}
    Has title of :${title}
    Is It finished? ${completed}
`);
};
