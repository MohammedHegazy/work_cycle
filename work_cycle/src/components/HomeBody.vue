<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Application for human resources management.
      <br />
      It helps companies to manage employees by check in and out using a QR
      code, salary management, tasks management and vacation management.
      <br />
      Our Application is smooth, easy to use and understandable.
    </p>
    <h3>Get our application</h3>
    <ul>
      <li>
        <a href="" target="_blank" rel="noopener">
          <img
            src="@/assets/Images/get_from/get_from_google.png"
            alt=""
            class="getapp"
          />
        </a>
      </li>
      <li>
        <a href="" target="_blank" rel="noopener">
          <img
            src="@/assets/Images/get_from/get_from_appstore.png"
            alt=""
            class="getapp"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  font-size: 22px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
.getapp {
  max-width: 250px;
  padding: 0px;
}
</style>
