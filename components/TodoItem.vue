<template>
  <div style="padding: 10px; border-radius: 15px; border: 2px solid #E5E4E2;">
    <div style="display: flex;">
      <div style="min-width: 0; width: 5%;">
        <div style="padding: 0 5px;">
          <p style="font-size: 10px; color: #A9A9A9;">Id</p>
          <p>{{ todo.id }}</p>
        </div>
      </div>

      <div style="min-width: 0; width: auto; flex-grow: 1;">
        <div style="padding: 0 5px;">
          <p style="font-size: 10px; color: #A9A9A9;">Title</p>
          <p>{{ todo.title }}</p>
        </div>
      </div>

      <div style="min-width: 0; width: 20%;">
        <div style="padding: 0 5px;">
          <p style="font-size: 10px; color: #A9A9A9;">User</p>
          <p>{{ todo.userId }}</p>
        </div>
      </div>

      <div style="min-width: 0; width: 5%;">
        <div style="padding: 0 5px;">
          <p style="font-size: 10px; color: #A9A9A9;">Completed</p>
          <p>{{ todo.completed }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps( {
    todo: {
      validator: value => value instanceof useTodoModel
    }
  } )
</script>