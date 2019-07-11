<template>

     <div class="output">
       <br>
       <div class="content" v-for="t1 in out">
        <h3> {{ t1.title }} </h3>
        <p> {{ t1.text }} </p>
        <p> {{ t1.prog }}</p>
        <div v-if="t1.title==='でじふぁーむ。'">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/OFlpBERf_1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div v-if="t1.title==='チャリ共'">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/L9KfMYbF5kw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       </div>
      </div>
</template>

<script>
export default {
  name: 'Output',
  data () {

    return{
      name: '作成物',
      out:[
      {title:'でじふぁーむ。',text: 'これは学生の提出物を管理するWebベースのアプリケーションです。',prog:'HTML CSS Javascript Python3 postgre'},
      {title:'チャリ共',text:'これは自転車を使っているユーザ向けのマップアプリです。',prog:'HTML CSS Javascript PHP MySQL'}
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
  margin: 10px;
  width: 100%;
}

h3 {
  color: #f8bbd0;
}

p {
  width: 100%;
  text-align: center;
}

</style>

