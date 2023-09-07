export default {
  async registerCoach(state, payload) {
    // console.log(state, payload);
    const userId = payload.coach.id;
    const coachData = {
      id: payload.coach.id,
      firstName: payload.coach.first,
      lastName: payload.coach.last,
      description: payload.coach.desc,
      rate: payload.coach.rate,
      areas: payload.coach.areas,
    };

    const response = await fetch(
      `https://vue-http-demo-eae6b-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json()

    if (!response.ok) {
      ///...error
    }
    state.coaches.push(coachData);
  },

  setCoaches(state, payload) {
    state.coaches = payload.coaches;
  },

  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
