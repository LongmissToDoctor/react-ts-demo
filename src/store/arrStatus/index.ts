const store = {
  state: {
    arr: [10, 20, 30]
  },
  actions: {
    arrpush(newState: { arr: number[] }, action: { type: string; value: number }) {
      newState.arr.push(action.value);
    }
  },
  actionNames: {
    arrpush: 'arrpush',
  }
}

for (let key in store.actions) {
  store.actionNames[key] = key;
}

export default store;
