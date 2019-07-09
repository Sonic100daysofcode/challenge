<template>
  <div class="profile">
    <div class="content">
    <h3> {{ name }} </h3>
    <p v-for="t1 in profi">
          <span class="p1">{{ t1.title }}</span>
          <span class="p2">{{ t1.pro }}</span>
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
  name: 'profile',
  data () {
    return {
      name: '<言語経験>',
      profi:[
       {title:'HTML:',pro:'2年'},
       {title:'CSS:',pro:'2年'},
       {title:'Javascript:',pro:'1年'},
       {title:'Vuejs:',pro:'1週間'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.profile {
  text-align:center;
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
  color:gray;
}

span{
  display:inline-block;
  width:15em;
}

</style>

