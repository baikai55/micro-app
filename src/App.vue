<template>
  <div id="sys-app">
    <nav>
      <router-link to="/sys/home">sysHome</router-link> |
      <router-link to="/sys/about">sysAbout</router-link>
      <router-link to="/sys/other">/sys/other</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#sys-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
