import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

// type 1 
// add.addEventListener('click', () => countStore.dispatch({ type: "ADD" }));
// minus.addEventListener('click', () => countStore.dispatch({ type: "MINUS" }));

// type 2
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
}

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

const onChange = () => {
  console.log('there was a change on the store.');
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);