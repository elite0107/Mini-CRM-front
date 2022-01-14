<template>
  <AuthLayout></AuthLayout>
</template>

<script>
import AuthLayout from "./Layout/AuthLayout";
export default {
  name: 'App',
  components: {
    AuthLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background: #f1f1f1;
}

.p-absolute {
  position: absolute;
}

.p-center {
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.w-100 { width: 100%; }
.mb-3 { margin-bottom: 1rem; }
.mt-3 { margin-top: 1rem; }
.ms-3 { margin-left: 1rem; }
.me-3 { margin-right: 1rem; }
</style>
