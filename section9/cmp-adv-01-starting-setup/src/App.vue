<template>
    <div>
        <the-header></the-header>
        <badge-list></badge-list>
        <user-info
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        ></user-info>
        <!-- <course-goal>
            <template #default="slotProps">
                <h2>{{ slotProps.item }}</h2>
                <p>{{ slotProps.anotherProp }}</p>
            </template>
        </course-goal> -->
        <course-goal #default="slotProps">
            <h2>{{ slotProps.item }}</h2>
            <p>{{ slotProps.anotherProp }}</p>
        </course-goal>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue';

export default {
    components: {
        'the-header': TheHeader,
        BadgeList,
        UserInfo,
        CourseGoal,
    },
    data() {
        return {
            activeUser: {
                name: 'Maximilian Schwarzmüller',
                description: 'Site owner and admin',
                role: 'admin',
            },
        };
    },
};
</script>

<style>
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>
