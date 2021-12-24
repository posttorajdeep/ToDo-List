let searchBox = document.querySelector("#searchBox");
let addBtn = document.querySelector("#button-addon2");
let input = document.querySelector("#inputBox");
let toDoList = document.querySelector(".list-group");

function addItem() {
  let li = document.createElement("li");
  li.className = "list-group-item";
  let newDeleteBtn = document.createElement("button");
  newDeleteBtn.appendChild(document.createTextNode("X"));
  newDeleteBtn.className = "btn btn-danger float deleteBtn";
  let node = document.createTextNode(input.value);
  let ul = document.querySelector(".list-group");

  li.appendChild(node);
  li.appendChild(newDeleteBtn);
  ul.appendChild(li);
  input.value = "";
}

function addOnBtn(e) {
  if (input.value == "") {
    alert("Please Enter Something to add in ToDo List");
  } else {
    addItem();
  }
}

function addOnKey(e) {
  if (input.value == "") {
    alert("Please Enter Something to add in ToDo List");
  } else if (e.keyCode === 13) {
    addItem();
  }
}

function handlerToDo(e) {
  if (e.target.classList.contains("deleteBtn")) {
    if (confirm("Are You Sure You Want To Delete This!!!")) {
      let li = e.target.parentElement;
      toDoList.removeChild(li);
    }
  } else {
    let li = e.target;
    li.classList.toggle("done");
  }
}

function startSearching() {
  let inValue = searchBox.value.toLowerCase();
  let list = Array.from(toDoList.children);
  list.forEach((el) => {
    let listTxtCntnt = el.firstChild.textContent.toLowerCase();
    if (listTxtCntnt.indexOf(inValue) != -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}

// Click on  Add Button
addBtn.addEventListener("click", addOnBtn);
// Press Enter Key
input.addEventListener("keyup", addOnKey);
// Delete ToDo List Item
toDoList.addEventListener("click", handlerToDo);
// Perform Filtering Search in the list
searchBox.addEventListener("keyup", startSearching);
