import EventService from '@/services/EventService';

export const state = () => ({
  events: [],
  event: {}
});

export const mutations = {
  SET_EVENTS(state, payload) {
    state.events = payload;
  },
  SET_EVENT(state, payload) {
    state.event = payload;
  }
};

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((r) => {
      commit('SET_EVENTS', r.data);
    });
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((r) => {
      commit('SET_EVENT', r.data);
    });
  }
};
