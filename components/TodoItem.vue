<template>
  <pre>{{ todo }}</pre>
</template>

<script setup>
  defineProps( {
    todo: {
      validator: value => value instanceof useTodoModel
    }
  } )
</script>