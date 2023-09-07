export default {
  async contachCoach(context, payload) {
    const newRequest = {
      userEmail: payload.request.email,
      message: payload.request.message,
    };
    const response = await fetch(
      `https://vue-http-demo-eae6b-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.request.coachId}.json`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.coachId = payload.request.coachId;
    // console.log(newRequest);
    if (!response.ok) {
      ///...error
      const error = new Error('response.message' || 'Failed to send request!');
      throw error;
    }
    context.commit('addRequest', { request: newRequest });
  },

  async loadRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-http-demo-eae6b-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      //...error
      const error = new Error(
        responseData.message || 'Failed to fetch requests!'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    // console.log(requests);
    context.commit('setRequests', { requests: requests });
  },
};
