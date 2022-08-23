<script setup>
import { ref, onMounted } from "vue";
import MainHeader from "@/layouts/header/main-header.vue";
import HomeFooter from "@/layouts/footer/home-footer.vue";

const isAnimationPlay = ref(false);

function onLeave(_, done) {
    isAnimationPlay.value = true;
    setTimeout(() => done(), 300);
}
function onEnter(_, done) {
    isAnimationPlay.value = false;
    done();
}
</script>

<template>
    <MainHeader />
    <Transition name="page">
        <div v-if="isAnimationPlay" class="transtion-wrapper"></div>
    </Transition>
    <RouterView v-slot="{ Component }">
        <Transition
            name="slide"
            mode="out-in"
            @enter="onEnter"
            @leave="onLeave"
        >
            <Component :is="Component" class="flex-full"></Component>
        </Transition>
    </RouterView>
    <HomeFooter />
</template>

<style lang="scss" src="@/scss/main.scss"></style>
