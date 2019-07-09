<template>

     <div class="output">
     	<h1> My Portfolio </h1>
    <div class="content" v-for="t1 in port">
    	<h3> {{ t1.name }} </h3>
 	    <p> {{ t1.text }} </p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {

    return {
    port:[
      {name: 'About me',text: '21 years old ,student programmer👨‍💻,Love html'},
      {name: 'Skills',text: 'html,css,javascript'},
      {name: 'interest',text: 'C++,C#,Java,React'}
      ]
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
  text-align: center;
}

</style>

