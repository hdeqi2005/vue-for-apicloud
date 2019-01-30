<template>
  <div id="app">
    <ul class="center">
      <li @click="order">跳转订单页面</li>
      <li @click="mine">跳转我的页面</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳转订单页面
    order () {
      window.api.openWin({
        name: 'order',
        url: 'order.html'
      })
    },
    // 跳转我的页面
    mine () {
      window.api.openWin({
        name: 'mine',
        url: 'mine.html'
      })
    }
  }
}
</script>

<style>
body{
  background-color: #fff;
}
.center{
  margin-top: 50%;
  text-align: center;
}
</style>
