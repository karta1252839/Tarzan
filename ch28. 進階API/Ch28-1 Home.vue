<template>
  <div class="home">
    <input type="text" v-model="account" />
    <input type="password" v-model="password" name="" id="" />
    <input type="button" value="登入" @click="login" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      account:'',
      password:''
    };
  },
  methods: {
    login() {
      this.axios.post('http://localhost:3000/login',{account:this.account,password:this.password})
      .then(res=>{
        if (res.success) {
          alert('登入成功')
          this.$store.commit('login',res.data.account)
          this.$router.push('/about')
        } else {
          alert(res.message)
        }
      })
    },
  },
};
</script>