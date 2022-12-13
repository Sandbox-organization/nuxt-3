<template>
  <nuxt-layout>
    <h1>Users</h1>
  </nuxt-layout>
</template>

<script setup>
  const Api = useApi()

  console.log( await Api.getUsers() )
  console.log( await Api.getUserById( 1 ) )
  console.log( await Api.getUserTodos( 1 ) )
  console.log( await Api.getUsers( { params: { website: "hildegard.org" } } ) )
</script>