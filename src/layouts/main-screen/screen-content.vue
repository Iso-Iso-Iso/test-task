<script setup>
import { ref } from "vue";
import YellowCircle from "@/components/main-screen/yellow-circle.vue";
import HoverSpinner from "@/components/main-screen/hover-spinner.vue";
import useParallax from "@/composables/use-parallax";
const title = ref(null);
useParallax(title);
</script>
<template>
    <div class="screen-content">
        <YellowCircle />
        <HoverSpinner />
        <div class="screen-content__headers">
            <RouterLink to="/another" class="link link_left-rotate"
                >where?</RouterLink
            >
            <h1 ref="title" class="primary-title">
                FULL-CYCLE EVENT AGENCY
            </h1>
            <RouterLink to="/another" class="link link_right-rotate"
                >what?</RouterLink
            >
        </div>
    </div>
</template>
<style lang="scss" src="./screen-content.scss"></style>
