const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createToDo = toDo => {
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.append(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  createToDo(toDo);
}


form.addEventListener('submit', onSubmit);
