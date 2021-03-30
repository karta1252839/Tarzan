<template lang="pug">
#app
  #nav
    router-link(to="/")Home
    | |
    router-link(to="/about")About
    | |
    router-link(to="/product")Product
    | |
    router-link(to="/cart")Cart
    //- 使用 keep-alive 讓頁面元件不會再換頁時消失
    keep-alive
      router-view
</template>

<style lang="stylus">
  #app
    text-align center
    margin-top 60px
    color #2c3e50
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    font-family Avenir,Helvetica,Aria
    
</style>