<script setup>
import MerqueeBackground from "@/layouts/main-screen/merquee-background.vue";
import ScreenContent from "@/layouts/main-screen/screen-content.vue";
</script>
<template>
    <main class="home-page">
        <MerqueeBackground />
        <ScreenContent />
    </main>
</template>
<style lang="scss">
.home-page {
    flex: 1 1 100%;
    @include flex(flex-start, stretch, $flex-direction: column);
}
</style>
