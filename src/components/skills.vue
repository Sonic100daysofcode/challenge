<template>
  <div class="skill">
    <div class="content">
      <h3> {{ name }} </h3>
      <div v-for="t1 in profi">
        <span class="p1">
          <div v-if="t1.title==='HTML:'">
            <i class="fab fa-html5"></i>{{ t1.title }}
          </div>
          <div v-else-if="t1.title==='CSS:'">
            <i class="fab fa-css3"></i>{{ t1.title }}
          </div>
          <div v-else-if="t1.title==='Javascript:'">
            <i class="fab fa-js-square"></i>{{ t1.title }}
          </div>
          <div v-else-if="t1.title==='C:'">
            <i class="fab fa-cuttlefish"></i>{{ t1.title }}
          </div>
          <div v-else-if="t1.title==='Python3:'">
            <i class="fab fa-python"></i>{{ t1.title }}
          </div>
          <div v-else-if="t1.title==='Vuejs:'">
            <i class="fab fa-vuejs"></i>{{ t1.title }}
          </div>
        </span>
        <span class="p2">{{ t1.item }}</span>
          <p></p>
      </div>
     </div>
     <br>
     <div class="content">
      <h3> {{ name2 }}</h3>
      <div v-for=" t2 in proc">
        <span class="p3">{{t2.title}}</span>
      </div>
     </div>
  </div>
</template>

<script>
 export default {
  name: 'skill',
  data () {
    return {
      name: '<言語経験>',
      profi:[
       {title:'HTML:',item:'2年'},
       {title:'CSS:',item:'2年'},
       {title:'Javascript:',item:'1年'},
       {title:'C:',item:'1年'},
       {title:'Python3:',item:'5ヶ月'},
       {title:'Vuejs:',item:'1週間'},

      ],
      name2: '<触ってみたい言語>',
      proc:[
        {title:'C++'},
        {title:'C#'},
        {title:'Java'},
        {title:'React'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.skill {
}

div.content {
  border-radius: 15px;
  background: #e8f5e9;
  margin: 0px 370px 0px 370px;
}


h3 {
  color: #f8bbd0;
}

p{
}

.p1{
  text-align:left
}

.p2{
  color:#90a4ae;
}

.p3{
  text-align:center
}

span{
  display:inline-block;
  width:15em;
  margin:20px,0px,20px,20px;
}

</style>

