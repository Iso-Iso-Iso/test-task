<script setup>
import { ref } from "vue";
import LanguageButton from "@/components/header/language-button.vue";
import HeaderLogo from "@/components/header/header-logo.vue";
import BurgerButton from "@/components/header/burger-button.vue";
import BurgerMenuWrapper from "@/components/header/burger-menu-wrapper.vue";
const isBurgerActive = ref(false);
</script>
<template>
    <header class="header">
        <LanguageButton />
        <HeaderLogo />
        <BurgerButton v-model="isBurgerActive" />
    </header>
    <BurgerMenuWrapper :burger-active="isBurgerActive" />
</template>

<style lang="scss" src="./main-header.scss"></style>
