<template>

  <div class="profile">
    <div class="content">
    <h3> {{ name }} </h3>
    <p class="p1">{{ t1 }}</p><p class="p2">{{ t2 }}</p><br>
    <p class="p1">{{ t3 }}</p><p class="p2">{{ t4 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      name: '基本情報',
      t1: 'ニックネーム:',
      t2: 'そにまる',
      t3: '血液型:',
      t4: 'A型',
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
  background-color: ;
  width: 100%;
}


h3 {
  color: #f8bbd0;
}

p{
  display:inline-block;
  text-align:left;
}

.p1{
  margin:10px 0px 0px 0px;
}

.p2{
  color:gray;
  margin:0px 0px 0px 30px;
}

</style>

