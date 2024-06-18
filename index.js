let userInputValue = document.getElementById("UserInput")

let userInputButton = document.getElementById("userAddButton")

let userTaskListContainer = document.getElementById("todoUList")


let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];

let todoListLenght = todoList.length


function oncompletedTodo(checkBoxId ,lableId){

  let checkBox = document.getElementById(checkBoxId)

  let lableElemnt = document.getElementById(lableId)

  lableElemnt.classList.toggle("checked")

}



function createAndAppendList(userEnterdData) {

  let todoId = `todo` + userEnterdData.uniqueNo

  let checkBoxId = `checkbox` + userEnterdData.uniqueNo

  let lableId = `label` + userEnterdData.uniqueNo


  let listElement = document.createElement("li")

  listElement.classList.add("todo-item-container")

  listElement.id = todoId

  // input Element create


  let inputElement = document.createElement("input")

  inputElement.type = "checkbox"

  inputElement.id = checkBoxId

  inputElement.onclick = function () {

    oncompletedTodo(checkBoxId,lableId)

  }

  inputElement.classList.add("checkbox-input")



  listElement.appendChild(inputElement)


  // create lable element


  let lableContainer = document.createElement("div")

  lableContainer.classList.add("label-container")


  let lableElemnt = document.createElement("label")

  lableElemnt.setAttribute("for", checkBoxId)


  lableElemnt.id = lableId

  lableElemnt.classList.add("checkbox-label")

  lableElemnt.textContent = userEnterdData.text

  lableContainer.appendChild(lableElemnt)


  // create delete container


  let deletContainer = document.createElement("div")

  deletContainer.classList.add("delete-icon-container")


  lableContainer.appendChild(deletContainer)


  let deleteIcon = document.createElement("span")

  deleteIcon.classList.add("material-symbols-outlined")

  deleteIcon.textContent = "delete"


  deleteIcon.onclick = function () {

  }



  deletContainer.appendChild(deleteIcon)


  listElement.appendChild(lableContainer)


  // listElement.textContent = userEnterdData


  userTaskListContainer.appendChild(listElement)


}


for (let todoItem of todoList) {

  createAndAppendList(todoItem)

}


userInputButton.onclick = function () {

  createAndAppendList(userInputValue.value)

}




