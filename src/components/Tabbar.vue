<template>
  <div class="tabbar-page">
    <div class="content-view">
      <router-view></router-view>
    </div>
    <div class="tabBox">
      <van-tabbar v-model="active" :safe-area-inset-bottom="true">
				<van-tabbar-item v-for="(item, index) in tabbars" :to="item.path" :name="item.path" :key="index" @click="switchTab(index)">
					<span>{{item.name}}</span>
					<template #icon="props">
							<img :src="props.active ? item.active : item.inactive"/>
					</template>
				</van-tabbar-item>
			</van-tabbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'
    const active = ref('/home');
    const tabbars = reactive([
          {
            name: "首页",
            path: "/home",
            active: './tabbar/index-active.png',
            inactive: './tabbar/index-inactive.png',
          },
        //   {
        //     name: "发现",
        //     path: "/find",
        //     active: './src/tabbar/find-active.png',
        //     inactive: './src/tabbar/find-inactive.png',
        //   },
          {
            name: '分类',
            path: "/category",
            active: './tabbar/type-active.png',
            inactive: './tabbar/type-inactive.png',
          },
					{
            name: "购物车",
            path: "/shoppingCart",
            active: './tabbar/cart-active.png',
            inactive: './tabbar/cart-inactive.png',
          },
          {
            name: "消息",
            path: "/message",
            active: './tabbar/message-active.png',
            inactive: './tabbar/message-inactive.png',
          },
          {
            name: "我的",
            path: "/mine",
            active: './tabbar/mine-active.png',
            inactive: './tabbar/mine-inactive.png',
          },
        ])
        const switchTab = ((index: number) =>{
            console.log(index);
        })

const handleClickBackButton = () => {
    history.go(-1);
};
</script>

<style scoped>
  .tabbar-page{
    background-color: white;
    height: 100%;width: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling:touch;
  }
  .fixed{
    position: fixed;
    left: 0;
    top: 0;
  }
  .content-view{
    margin-top: 46px;
    height:calc(100% - 50px - 46px);
  }
  .tabBox {
    height: 50px;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
  
</style>