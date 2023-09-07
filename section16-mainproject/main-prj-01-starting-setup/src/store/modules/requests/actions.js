export default {
  contachCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.request.coachId,
      userEmail: payload.request.email,
      message: payload.request.message,
    };
    context.commit('addRequest', { request: newRequest });
  },
};
