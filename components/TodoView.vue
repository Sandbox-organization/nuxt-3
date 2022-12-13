<template>
  <todo-list/>
</template>

<script setup>
  const Todo = useTodo()
  
  const fetchTodoList = Todo.fetch
  
  await fetchTodoList()
</script>