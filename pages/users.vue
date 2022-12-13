<template>
  <nuxt-layout>
    <h1>Users</h1>
  </nuxt-layout>
</template>

<script setup>
  const runtimeConfig = useRuntimeConfig()
  
  const API_BASE_URL = runtimeConfig.API_BASE_URL

  const request = ( url = '', options = {} ) => (
    $fetch( API_BASE_URL + url, options )
  )

  const getUsers = options => (
    request( '/users', options )
  )
  const getUserById = ( id, options ) => {
    const route = '/users/' + id 
    return request( route, options )
  }
  const getUserTodos = ( userId, options ) => {
    const route = '/users/' + userId + '/todos'
    return request( route, options )
  }

  console.log( await getUsers() )
  console.log( await getUserById( 1 ) )
  console.log( await getUserTodos( 1 ) )
  console.log( await getUsers( { params: { website: "hildegard.org" } } ) )
</script>