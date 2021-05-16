<template>
  <div>
    <h2>我是Home组件</h2>
    <h2>Home组件内容，嘿嘿嘿嘿</h2>
    <router-link to="/home/news" tag="button">News</router-link>
    <router-link to="/home/messages" tag="button">Messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"

}
</script>

<style scoped>

</style>