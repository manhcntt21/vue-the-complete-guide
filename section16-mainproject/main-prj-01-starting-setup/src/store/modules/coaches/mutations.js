export default {
  registerCoach(state, payload) {
    console.log(state, payload);
    const coachData = {
      id: payload.coach.id,
      firstName: payload.coach.first,
      lastName: payload.coach.last,
      description: payload.coach.desc,
      rate: payload.coach.rate,
      areas: payload.coach.areas,
    };
    state.coaches.push(coachData);
  },
};
