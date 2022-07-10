<template>
  <div class="header">
    <h1>TODO LIST</h1>
  </div>
</template>

<style scoped>
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
  font: normal 36px 'Open Sans', cursive;
}
.content {
  padding: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeLayoutHeader',
});
</script>
