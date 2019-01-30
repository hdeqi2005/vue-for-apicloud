<template>
  <div id="app">
    <button class="m-t-40" @click="close">返回</button>
    <div>这是我的页面</div>
  </div>
</template>

<script>
export default {
  methods: {
    // 返回
    close () {
      window.api.closeWin()
    }
  }
}
</script>

<style>
body{
  background-color: #fff;
}
.m-t-40{
  margin-top: 40px;
}
</style>
