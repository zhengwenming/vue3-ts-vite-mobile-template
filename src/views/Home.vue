<template>
  <div class="page">
    <div @click="gotoAbout" class="item">This is a Home page0</div>
    <div class="item">This is a Home page1</div>
    <div class="item">This is a Home page2</div>
    <div class="item">This is a Home page3</div>
    <div class="item">This is a Home page4</div>
    <div class="item">This is a Home page5</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page</div>
    <div class="item">This is a Home page18</div>
    <div class="item">This is a Home page19</div>
    <div class="item">This is a Home page20</div>
    <div class="item">This is a Home page21</div>
    <div class="item">This is a Home page22</div>
    <div class="item">This is a Home page23</div>
    <div class="item">This is a Home page24</div>
    <div class="item">This is a Home page25</div>
    <div class="item">This is a Home page26</div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

import { ref, reactive } from 'vue'
  const router =  useRouter();
  const gotoAbout = () => {
    console.log('gotoAbout');
    router.push('/about')
  };
</script>

<style scoped>
.page {
  height: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
}

.item {
  background-color: aqua;
  margin: 5px;
  height: 60px;
}
</style>