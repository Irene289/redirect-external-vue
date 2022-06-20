<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ul>
      <li>
        <h3>By &lt;router-link></h3>
        <router-link to="google.com" target="_blank">
          www.google.com
        </router-link>
      </li>
      <li>
        <h3>By &lt;a></h3>
        <a href="https://google.com" target="_blank"> www.google.com </a>
      </li>
      <li>
        <h3>By event handler</h3>
        <button @click.stop.prevent="onClick">www.google.com</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Component_1",
  methods: {
    onClick() {
      // window.location.href = "https://www.google.com"; // original tab
      window.open("https://google.com", "_blank"); // open new tab
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
h3 {
  display: inline-block;
  margin-right: 10px;
}
a {
  color: #42b983;
}
button {
  cursor: pointer;
}
</style>
