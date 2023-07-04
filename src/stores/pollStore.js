import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'PHP or Javascript? 🤣',
    answerA: 'PHP',
    answerB: 'JavaScript',
    votesA: 2,
    votesB: 12,
  },
]);

export default PollStore;