<template>
  <div id="app">
    <keep-alive include="Home,Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
  html,
  body,
  #app,
  .container {
    height: 100%;
  }
</style>
