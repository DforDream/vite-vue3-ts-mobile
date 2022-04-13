<template>
  <div class="loading" v-show="http.isLoading">
    <Loading />
  </div>
  <div>
    <button @click="cancelAllRequest()">取消全部</button>
    <button @click="cancelRequest(VITE_BASE_URL)">取消</button>
    <br />
    <Button type="primary">主要按钮</Button>
    <br />
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/mine">mine</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import request, { cancelAllRequest, cancelRequest } from "@/http";
import { Button, Loading } from "vant";
import useHttp from "@/store/http";
const { VITE_BASE_URL } = import.meta.env;
const http = useHttp();
request
  .get({
    url: VITE_BASE_URL,
    interceptors: {
      requestInterceptors: (config) => {
        console.log("接口请求拦截");
        return config;
      },
      responseInterceptors: (res) => {
        console.log("接口响应拦截");
        return res;
      },
    },
  })
  .then((res) => {
    console.log(res);
  });
</script>

<style scoped lang="less">
.loading {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  :deep(.van-loading) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
  }
}
</style>
