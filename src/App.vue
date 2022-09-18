<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "./store";

export default defineComponent({
  setup() {
    const store = useStore(key);
    console.log(store.state.count);
    return {};
  },
});
</script>

<style scoped>
</style>