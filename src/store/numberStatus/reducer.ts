import handleNum from './index';
const defaultState = {
  ...handleNum.state,
}

const reducer = (state = defaultState, action: {
  type: string;
  value: number
}) => {
  let newState = JSON.parse(JSON.stringify(state));
  // switch (action.type) {
  //   case handleNum.actionNames.add1:
  //     handleNum.actions[handleNum.actionNames.add1](newState, action);
  //     break;
  //   case handleNum.actionNames.add2:
  //     handleNum.actions[handleNum.actionNames.add2](newState, action);
  //     break;
  // }
  for (let key in handleNum.actionNames) {
    if (action.type === key) {
      handleNum.actions[key](newState, action);
      break;
    }
  }
  return newState;
}

export default reducer;