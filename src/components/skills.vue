<template>
  <div class="skill">
    <div class="content">
    <h3> {{ name }} </h3>
    <p v-for="t1 in profi">
          <span class="p1">{{ t1.title }}</span>
          <span class="p2">{{ t1.item }}</span>
    </p></div>
    <div class="content">
    <h3> {{ name2 }}</h3>
    <p v-for=" t2 in proc">
      <span class="p1">{{t2.title}}</span>
      <span class="p2">{{t2.pro}}</span>
    </p>
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
        {title:'Java'}
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

span{
  display:inline-block;
  width:15em;
}

</style>

