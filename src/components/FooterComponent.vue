<template>
  <footer class="bg-gray-900 text-white py-6 text-center">
    <div class="container mx-auto">
      <p class="text-sm">&copy; {{ new Date().getFullYear() }} - Alle Rechte vorbehalten</p>
      <nav class="mt-2">
        <a href="#" class="mx-2 hover:underline">Impressum</a>
        <a href="mailto:bewerbung@blissfear.com" class="mx-2 hover:underline">Kontakt</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #222;
  color: white;
  padding: 20px;
  text-align: center;
}
footer a {
  color: #bbb;
  margin: 0 10px;
  text-decoration: none;
}
footer a:hover {
  color: white;
  text-decoration: underline;
}
</style>
