<template>
  <ul>
    <li v-for="link in links" :key="link.text">
      <router-link :to="link.route"
        ><a> {{ link.text }}</a></router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "BTC PRICE", route: "/", status: "exact" },
        { text: "RUPIAH TO BTC", route: "/btc" },
        { text: "BTC TO RUPIAH", route: "/rupiah" },
      ],
    };
  },
};
</script>

<style scope>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: teal;
}

li {
  float: left;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: rgb(46, 172, 172);
}
</style>