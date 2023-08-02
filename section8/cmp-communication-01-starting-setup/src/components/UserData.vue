<template>
    <h1>{{ firstName }} {{ lastName }}</h1>
</template>

<script>
export default {
    props: ['firstName', 'lastName', 'person'],
    data() {
        return {};
    },
};
</script>
