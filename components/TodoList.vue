<template>
  <ul>
    <li
      v-for="todo of todoList"
      v-bind:key="todo.id"
    >
      <todo-item
        v-bind:todo="todo"
        v-on:click="todo.print()"
      />
    </li>
  </ul>
</template>

<script setup>
  const Todo = useTodo()
  
  const todoList = Todo.list
</script>