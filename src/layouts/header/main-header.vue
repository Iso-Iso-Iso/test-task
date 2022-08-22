<script setup>
import LanguageButton from "@/components/header/language-button.vue";
import HeaderLogo from "@/components/header/header-logo.vue";
import BurgerButton from "@/components/header/burger-button.vue";
</script>
<template>
    <header class="header">
        <LanguageButton />
        <HeaderLogo />
        <BurgerButton />
    </header>
</template>

<style lang="scss" src="./main-header.scss"></style>
