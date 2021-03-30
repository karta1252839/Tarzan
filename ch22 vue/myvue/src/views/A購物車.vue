<template lang="pug">
  #prodect
  b-table(:items="prodect" :fields="fields")
    template(v-slot:cell(price)='data')
      |NT$
      span.text-primary {{data.value}}
    template(v-slot:cell(action)='data')
      b-btn(variant='success' @click="addCart(data)")加入購物車
      
</template>

<script>
// 引用
export default {
  name: "prodect",
  data() {
    return {
      prodects: [
        {
          id: 1,
          name: "Lenovo 9代i5雙碟電競機",
          pices: 21990,
        },
        {
          id: 2,
          name: "Lenovo 15吋窄邊電競",
          pices: 28990,
        },
        {
          id: 3,
          name: "金士頓A400 480G",
          pices: 1690,
        },
      ],
    };
  },
  methods:{
    addCart(data){
      // 呼叫 vuex 的 addCart 的 mutations
      // 將進來 methods 資料傳到 vuex mutations addCart
      this.$store.commit('addCart',data)
    }
  }
};
</script>