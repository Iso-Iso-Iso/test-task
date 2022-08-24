<script setup>
import { toRefs } from "vue";
const props = defineProps({ burgerActive: Boolean });
const { burgerActive } = toRefs(props);
</script>
<template>
    <Transition name="burger-wrapper">
        <div v-if="burgerActive" class="burger-menu"></div>
    </Transition>
</template>
<style lang="scss" src="./burger-menu-wrapper.scss"></style>
