<template>
     <div class="output">
      <h1><i class="far fa-address-card"></i></h1>
      <h1>My Portfolio </h1><br>
      <div class="content" v-for="t1 in port">
        <div v-if="t1.mode === '1'">
          <br><h2><i class="fas fa-user"></i> {{ t1.name }} </h2><br>
          <p> {{ t1.text }} </p>
        </div>
        <div v-else-if="t1.mode === '2'">
            <h2><i class="fas fa-file-code"></i> {{ t1.name }} </h2><br>
            <p> {{ t1.text }} </p>
        </div>
        <div v-else>
           <br><h2><i class="fab fa-react"></i> {{ t1.name }} </h2><br>
           <p> {{ t1.text }} </p>
        </div>
       </div>
       <div class="content">
        <h1 style="display:inline-block">
          <a href="https://twitter.com/_SoniTri" target="__blank">
            <i class="fab fa-twitter-square fa-2x"></i>
          </a>
        </h1>
        <h1 style="display:inline-block">
          <a href="https://github.com/Sonic100daysofcode/challenge" target="__blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </h1>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {

    return {
    port:[
      {mode: '1',name: 'About me',text: '21 years old,student programmer'},
      {mode: '2',name: 'Skills',text: 'html,css,javascript'},
      {mode: '3',name: 'Interest',text: 'C++,C#,Java,React'}
      ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
}

div.content {
  width:30%;
  display: inline-block;
}

h1{
}

h2{
  color:#f8bbd0;
}


h3 {
  color: #f8bbd0;
}

p {
  width: 90%;
  display: inline-block;
  text-align: center;
}

a{
  color:#000
}

</style>

