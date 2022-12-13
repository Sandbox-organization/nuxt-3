<template>
  <todo-list/>
</template>

<script setup>
  const Todo = useTodo()
  await Todo.fetch()
</script>