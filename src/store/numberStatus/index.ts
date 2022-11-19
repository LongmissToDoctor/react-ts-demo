const store = {
  state: {
    num: 20,
  },
  actions: {
    add1(newState: { num: number }, action: { value: number }) {
      newState.num += action.value;
    },
    add2(newState: { num: number }, action: { value: number }) {
      newState.num += action.value;
    }
  },
  asyncActions: {
    asyncAdd1(dis: Function) {
      setTimeout(() => {
        dis({ type: 'add2', value: 2 });
      }, 1000);
    }
  },
  // 名字统一管理
  // actionNames: {
  //   add1: 'add1',
  //   add2: 'add2',
  // }
  actionNames: {}
}

for (let key in store.actions) {
  store.actionNames[key] = key;
}

export default store;