<template>
  <div class="footer-distributed">
    <div class="footer-left">
      <h3>
        Todo
        <span>list</span>
      </h3>

      <p class="footer-company-name">Copyright by Tan Do</p>
    </div>
  </div>
</template>

<style scoped>
.footer-distributed {
  background: #666;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

/* The company logo */

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px 'Open Sans', cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: lightseagreen;
}

.footer-distributed .footer-company-name {
  color: #222;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeLayoutFooter',
});
</script>
