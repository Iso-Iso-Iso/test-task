<script setup>
import { toRefs } from "vue";
const props = defineProps({
    rotate: Boolean,
});
const { rotate } = toRefs(props);
</script>
<template>
    <div class="merquee" :class="{ merquee_rotate: rotate }">
        <div class="merquee__wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" src="./merquee-line.scss"></style>
