<template lang="pug">
#cart
  h1 購物車
  //- 這二種寫法官方不推薦，官方推薦使用 computed 的 cart() 使用 vuex 資料
  //- | {{$store.state.cart}}
  //- | {{$store.getters.cart}}
  b-table(:items="cart", :fields="fields")
    template(v-slot:cell(action)="data")
      b-btn(variant="danger", @click="delCart(data.index)") 移除
  h1.text-center 總共 {{ cart.lenght }} 個產品
  h1.text-center 總共 {{ cart.price }} 元
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      fields: [
        {
          // json 的 key
          key: "name",
          // 顯示名字
          label: "商品名",
        },
        {
          key: "price",
          label: "價格",
        },
        {
          // 也可以使用不存在的key 自己去定義內容
          key: "action",
          label: "價格",
        },
      ],
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    totalPrice(){
      let price = 0
      for (const item of this.cart) {
        price += item.price
      }
    }
  },
  methods: {
    delCart(index) {
      this.$store.commit("delCart", index)
    },
  },
};
</script>