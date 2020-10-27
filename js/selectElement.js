const titleInput = document.getElementById("new-todo-title");
const list = document.getElementById("todo-list");
const listItems = list.childNodes;

const countEl = document.querySelector(".todo-count strong");

const allBtn = document.getElementsByClassName("all")[0];
const activeBtn = document.getElementsByClassName("active")[0];
const completedBtn = document.getElementsByClassName("completed")[0];

export {
  titleInput,
  list,
  listItems,
  countEl,
  allBtn,
  activeBtn,
  completedBtn,
};
