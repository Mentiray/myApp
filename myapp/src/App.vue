<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,body{
  width:100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
a,a:hover{
  color: #000;
  text-decoration: none;
}
li{
  list-style: none;
}

</style>
