<template>
  <div id="app">
    <button class="m-t-40" @click="close">返回</button>
    <div>这是订单页面</div>
    <div>打开frame</div>
  </div>
</template>

<script>
export default {
  methods: {
    // 返回
    close () {
      window.api.closeWin()
    },
    // 打开订单页面frame
    openFrame () {
      window.api.openFrame({
        name: 'orderFrame',
        url: 'orderFrame.html',
        rect: {
          x: 60,
          y: 0,
          w: 'auto',
          h: 'auto'
        }
      })
    }
  }
}
</script>

<style>
body {
  background-color: #fff;
}
.m-t-40 {
  margin-top: 40px;
}
</style>
