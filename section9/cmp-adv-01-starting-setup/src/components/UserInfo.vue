<template>
    <section>
        <base-card>
            <!-- an theo slot co ten trong base card-->
            <template v-slot:header>
                <h3>{{ fullName }}</h3>
                <base-badge
                    :type="role"
                    :caption="role.toUpperCase()"
                ></base-badge>
            </template>
            <!-- default slot trong base card-->
            <!-- <p>{{ infoText }}</p> -->
            <template v-slot:default>
                <p>{{ infoText }}</p>
            </template>
        </base-card>
    </section>
</template>

<script>
export default {
    props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped></style>
