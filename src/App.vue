<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "./store";

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store.state.count);
    console.log(store.state.products.all);
    store.commit("products/increment");
    store.dispatch("products/getAllProducts");
    return {};
  },
});
</script>

<style scoped></style>