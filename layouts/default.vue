<template>
  <div>
    <div>
      <nuxt-link style="margin-right: 5px;" to="/">
        <span>Main</span>
      </nuxt-link>
      
      <nuxt-link to="/todos">
        <span>Todos</span>
      </nuxt-link>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>