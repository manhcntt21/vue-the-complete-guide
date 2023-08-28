<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go To Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  props: ['id'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamsMembers(id) {
      console.log(id);
      const selectedTeam = this.teams.find((team) => team.id === id);
      // console.log(selectedTeam);
      const members = selectedTeam.members;
      // console.log(members);
      const selectedMembers = [];
      for (const member of members) {
        const selectedUSer = this.users.find((user) => user.id === member);
        // console.log(selectedUSer);
        selectedMembers.push(selectedUSer);
      }
      // console.log(selectedMembers);
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    console.log(this.id);
    this.loadTeamsMembers(this.id);
    console.log(this.$route.query.sort);
    // handle sort
  },

  watch: {
    id(newId) {
      // console.log(newId);
      this.loadTeamsMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
