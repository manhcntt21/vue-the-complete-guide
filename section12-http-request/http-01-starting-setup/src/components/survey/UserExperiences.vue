<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';
export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      // 'https://vue-http-demo-eae6b-default-rtdb.asia-southeast1.firebasedatabase.app/surveys' , truong hop error
      axios
        .get(
          'https://vue-http-demo-eae6b-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
        )
        .then((res) => {
          this.results = [];
          for (const id in res.data) {
            this.results.push({
              id: id,
              name: res.data[id].name,
              rating: res.data[id].rating,
            });
          }
          this.isLoading = false;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.message);
          this.error = 'Failed to fetch data - please try again';
          this.isLoading = false;
        });
    },
  },
  mounted() {
    // console.log(this.results);
    this.loadExperiences();
    // console.log(this.results);
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
