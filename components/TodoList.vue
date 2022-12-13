<template>
  <ul>
    <li style="margin-bottom: 5px;"
      v-for="todo of todoList"
      v-bind:key="todo.id"
    >
      <todo-item
        v-bind:todo="todo"
      />
    </li>
  </ul>
</template>

<script setup>
  const Todo = useTodo()
  const todoList = Todo.list
  
  await Todo.fetch()
</script>