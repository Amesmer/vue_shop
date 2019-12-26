<template>
  <el-button type="info" @click="loginout">login out</el-button>
</template>

<script>
export default {
  methods: {
    loginout() {
      // 清空token即可实现退出
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
