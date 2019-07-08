<template>

  <div class="profile">
    <div class="content">
    <h3> {{ name }} </h3>
    <p v-for="t1 in profi">
          <span class="p1">{{ t1.title }}</span>
          <span class="p2">{{ t1.pro }}</span><br>
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      name: '基本情報',
      profi:[
       {title:'ニックネーム:',pro:'そにまる'},
       {title:'年齢:',pro:'21 years old'},
       {title:'血液型:',pro:'A型'},
       {title:'出身地:',pro:'兵庫県'}
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
  border-radius: 25px;
  background: #e3f2fd;
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
  width:10em;
}

</style>

