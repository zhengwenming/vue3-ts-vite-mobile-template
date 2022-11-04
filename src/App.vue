<template> 
    <van-nav-bar class="nav-bar" :title=$route.meta.title  fixed :left-arrow=!$route.meta.hideBackBtn :showBackButton=!$route.meta.hideBackBtn @click-left="handleClickBackButton"></van-nav-bar>
    <div v-if="$route.meta.hideBackBtn" class="first-level-content-view">
      <router-view></router-view>
    </div>
    <div v-else class="second-level-content-view">
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
    .first-level-content-view{
     height: 100%;
    }
    .second-level-content-view{
        margin-top: 46px;
        height:100%;
    }
</style>