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
    return {};
  },
});
</script>

<style scoped>
</style>