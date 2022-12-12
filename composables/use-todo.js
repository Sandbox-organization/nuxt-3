export default () => {
  const todoList = useState( 'todo-list', () => [] )

  const fetchTodoList = async () => {
    const data = await $fetch( 'https://jsonplaceholder.typicode.com/todos' )
    todoList.value = data.map( el => new useModelTodo( el ) )
  }

  return {
    todoList,
    fetchTodoList
  }
}