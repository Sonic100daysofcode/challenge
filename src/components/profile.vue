<template>
  <div class="profile">
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
      <span class="p2">{{t2.item}}</span>
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
      name: '<基本情報>',
      profi:[
       {title:'ニックネーム:',item:'そにまる'},
       {title:'年齢:',item:'21 years old'},
       {title:'職業',item:'学生'},
       {title:'血液型:',item:'A型'},
       {title:'出身地:',item:'兵庫県'}
      ],
      name2:'<性格・趣味>',
      proc:[
      {title:'性格:',item:'マイペース'},
      {title:'趣味:',item:'キャンプ/モノポリー/HTML'},
      {title:'タイプ:',item:'インドア'},
      {title:'お酒:',item:'飲まない'},
      {title:'タバコ:',item:'吸わない'},
      {title:'趣味にしたい:',item:'読書/料理'}
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
  color:#90a4ae;
}

span{
  display:inline-block;
  width:15em;
}

</style>

