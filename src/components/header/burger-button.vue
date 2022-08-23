<script setup>
import { toRefs } from "vue";
const props = defineProps({
    modelValue: Boolean,
});
defineEmits(["update:modelValue"]);
const { modelValue } = toRefs(props);
</script>
<template>
    <div class="burger-wrapper">
        <div
            class="burger-button"
            :class="{ 'burger-button_active': modelValue }"
            @click="$emit('update:modelValue', !modelValue)"
        >
            <div class="burger-button__item"></div>
            <div class="burger-button__item"></div>
        </div>
    </div>
</template>
<style lang="scss" src="./burger-button.scss"></style>
