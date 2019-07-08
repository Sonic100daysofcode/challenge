<template>

  <div class="profile">
    <div class="content">
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      name: 'お腹すいた',
      text: 'ご飯を食べたいです。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.profile {
  text-align: center;
}

div.content {
  background-color: #blue;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>

