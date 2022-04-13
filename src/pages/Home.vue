<template>
  <div>home</div>
  <div>
    {{ count }}-----{{ name }}------{{ doubleCount }}---{{ store.countTo(5) }}
  </div>
  <div class="xixi">
    <button class="haha" @click="store.$reset()">重置count</button>
    <button class="hehe" @click="store.addCount()">count+1</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "@/store";
const store = useStore();
const { count, name, doubleCount } = storeToRefs(store);
</script>

<style lang="less" scoped>
.xixi {
  .haha {
    background: red;
  }
  .hehe {
    background: blue;
  }
}
</style>