<template>
    <div>
        <h1>{{ message }}</h1>
        <p>You are running your first page with Vue + SSR + Annabel 🎉</p>
    </div>
</template>

<script setup>
defineProps({
    message: String,
});
</script>
