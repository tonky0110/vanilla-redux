import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    console.log("Call action.type = 'ADD'");
    return count + 1;
  } else if (action.type === 'MINUS') {
    console.log("Call action.type = 'MINUS'");
    return count - 1;
  }
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });

console.log(countStore.getState());

countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());