<template>
  <div>
    <h1>Events</h1>
    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
      :data-index="event.id"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';

export default {
  components: {
    EventCard
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents');
    } catch (e) {
      error({ statusCode: 503, message: 'problem in fetching all events' });
    }
  },
  // async asyncData({ error }) {
  //   try {
  //     const { data } = await EventService.getEvents();
  //     return { events: data };
  //   } catch (e) {
  //     error({ statusCode: 503, message: 'No events, server error' });
  //   }
  // },
  computed: mapState({ events: (state) => state.events.events }),
  head() {
    return {
      title: 'Event Listing'
    };
  }
};
</script>

<style lang="scss" scoped></style>
