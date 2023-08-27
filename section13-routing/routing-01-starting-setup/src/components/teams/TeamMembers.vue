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
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },

  created() {
    console.log(this.$route);
    const id = this.$route.params.id;
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
