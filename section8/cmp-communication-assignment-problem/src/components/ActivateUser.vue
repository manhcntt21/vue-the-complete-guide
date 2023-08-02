<template>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
export default {
    props: ['id', 'userName', 'name', 'age'],
    data() {
        return {};
    },
};
</script>
