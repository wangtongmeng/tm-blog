<template>
  <div class="header-logo">
    <a href="javascript:;"></a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-logo {
  display: inline-block;
  width: 55px;
  height: 55px;
  background-color: #ff6600;
}
.header-logo a {
  display: inline-block;
  width: 110px;
  height: 55px;
}
.header-logo a:before {
  content: " ";
  display: inline-block;
  width: 55px;
  height: 55px;
  background: url("/assets/img/mi-logo.png") no-repeat center;
  background-size: 55px;
  transition: margin 0.2s;
}
.header-logo a:after {
  content: " ";
  display: inline-block;
  width: 55px;
  height: 55px;
  background: url("/assets/img/mi-home.png") no-repeat center;
  background-size: 55px;
}
.header-logo a:hover:before {
  margin-left: -55px;
  transition: margin 0.2s;
}
</style>