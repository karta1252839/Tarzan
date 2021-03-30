<template>
  <div class="card">
    <img :src="data.img" alt="" />
    <h1>{{ data.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>
