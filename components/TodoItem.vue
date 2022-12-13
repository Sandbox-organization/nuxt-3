<template>
  <div style="padding: 10px; border-radius: 15px; border: 2px solid #E5E4E2;">
    <p>{{ todo }}</p>
  </div>
</template>

<script setup>
  defineProps( {
    todo: {
      validator: value => value instanceof useTodoModel
    }
  } )
</script>