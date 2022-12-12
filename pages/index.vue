<template>
  <nuxt-layout>
    <h1>Welcome!</h1>

    <pre>{{ todoList }}</pre>
  </nuxt-layout>
</template>

<script setup>
  const {
    todoList
  } = useTodo()
</script>