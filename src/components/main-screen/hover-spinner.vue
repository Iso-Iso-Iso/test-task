<script setup>
import { ref } from "vue";

import useCircleText from "@/composables/use-circle-text";
const spinnerText = ref(null);
useCircleText(spinnerText, 13);
</script>
<template>
    <div class="hover-spinner">
        <div class="hover-spinner__circle"></div>
        <div class="hover-spinner__item" ref="spinnerText">
            showreel showreel showreel
        </div>
    </div>
</template>
<style lang="scss" src="./hover-spinner.scss"></style>
