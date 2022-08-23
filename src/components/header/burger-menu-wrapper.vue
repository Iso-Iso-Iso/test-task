<script setup>
import { toRefs } from "vue";
const props = defineProps({ burgerActive: Boolean });
const { burgerActive } = toRefs(props);
</script>
<template>
    <div v-if="burgerActive" class="burger-menu"></div>
</template>
<style lang="scss">
.burger-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    bottom: 0;
    overflow: auto;
    background: white;
    width: 100vw;
    height: 100vh;
}
</style>
