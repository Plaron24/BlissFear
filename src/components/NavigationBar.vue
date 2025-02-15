<template>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Über uns</a></li>
      <li><a href="#music">Musik</a></li>
      <li><a href="#tourdates">Tourdaten</a></li>
      <li><a href="#gallery">Galerie</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
nav {
  background: #111;
  padding: 10px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #f00;
}
</style>
