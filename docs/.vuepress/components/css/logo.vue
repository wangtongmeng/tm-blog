<template>
  <div class="header-logo">
    <a href="javascript:;"></a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-logo {
  display: inline-block;
  width: 55px;
  height: 55px;
  background-color: #ff6600;
  a {
    display: inline-block;
    width: 110px;
    height: 55px;
    &:before {
      content: " ";
      display: inline-block;
      width: 55px;
      height: 55px;
      background: url("./imgs/mi-logo.png") no-repeat center;
      background-size: 55px;
      transition: margin 0.2s;
    }
    &:after {
      content: " ";
      display: inline-block;
      width: 55px;
      height: 55px;
      background: url("./imgs/mi-home.png") no-repeat center;
      background-size: 55px;
    }
    &:hover:before {
      margin-left: -55px;
      transition: margin 0.2s;
    }
  }
}
</style>