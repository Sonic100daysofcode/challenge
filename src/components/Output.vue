<template>

     <div class="output">
    <div class="content" v-for="i in 2" :key=i>
    <h3> {{ name }} </h3>
    <p> {{ text }} </p></div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {

    return {
      name: 'お腹すいた',
      text: 'ご飯を食べたいです。',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: #f8bbd0;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>

