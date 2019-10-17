<template>
  <div class="home">
    <div id="head">
      头部
    </div>
    <div id="box">
      <div id="left">
        侧边页
      </div>
      <div id="right"><router-view></router-view></div>
    </div>
    <div id="foot">
      脚部
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>
<style>
#head {
  background: aquamarine;
  width: 100%;
  height: 120px;
}
#box {
  display: flex;
  justify-content: space-between;
}
#left {
  background: antiquewhite;
  width: 500px;
  height: 500px;
}
#right {
  background: skyblue;
  width: 1070px;
  height: 500px;
}
#foot {
  background: #42b983;
  width: 100%;
  height: 120px;
}
</style>
