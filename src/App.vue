<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <ul>
        <li v-for="link in links">
          <router-link :to="{name: link.route || link}">{{
            link.name || link}}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return { links: [
      {route: 'Home', name: 'Home'},
      'About'
    ]}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

nav {
  position: fixed; top: 0; left: 8px; right: 8px;
  text-align: right; background: white;
}

nav ul li a {
  text-decoration:none;
}
</style>
