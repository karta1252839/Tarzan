<template lang="pug">
</template>

<script>
export default [
  {
    name: "Cart",
    data() {},
    computed: {},
    methods: {},
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "番茄鐘 | 404",
    },
  },
];
</script>