<template>
  <div id="app">
    <h1>{{ text }}</h1>
    <Card v-for="(card, index) in cards" :key="index" :data="card"></Card>
  </div>
</template>

<script>
// 引用
import Card from './components/Card.vue'
export default {
  data() {
    return {
      text: 'aaa',
      cards: [
        {
          img: './1.jpg',
          title:'太師傅'
        },
        {
          img: './2.jpg',
          title:'吉野烤肉飯'
        },
      ]
    };
  },
};
</script>

// scoped僅應用在某個元件，沒有的話她會套到整個網頁
<style scoped lang="stylus">
h1 {
  color: red;
}
</style>