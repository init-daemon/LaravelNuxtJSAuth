export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, index) {
    state.list[index].done = !state.list[index].done;
  },
};
