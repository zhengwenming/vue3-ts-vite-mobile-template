<template> 
    <van-nav-bar class="nav-bar" :title=$route.meta.title  :left-arrow=!$route.meta.hideBackBtn :showBackButton=!$route.meta.hideBackBtn @click-left="handleClickBackButton"></van-nav-bar>
    <div v-if="$route.meta.hideBackBtn" class="content-view">
      <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
    const handleClickBackButton = () => {
        history.back();
    };
</script>
<style scoped>
  .nav-bar{
    background-color: #276BFF;
  }
  :deep(.van-nav-bar__arrow){
    color: white;
  }
    :deep(.van-nav-bar__title){
        color: white;
    }
    .content-view{
     height: 100%;
     background-color:yellow;
    }
</style>