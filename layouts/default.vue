<template>
  <div style="padding: 10px;">
    <div style="margin-bottom: 10px;">
      <nuxt-link style="margin-right: 5px;" to="/">
        <span>Main</span>
      </nuxt-link>
      
      <nuxt-link style="margin-right: 5px;" to="/todos">
        <span>Todos</span>
      </nuxt-link>
      
      <nuxt-link to="/users">
        <span>Users</span>
      </nuxt-link>
    </div>
    
    <div>
      <slot/>
    </div>
  </div>
</template>