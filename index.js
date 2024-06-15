let userInputValue = document.getElementById("UserInput")

let userInputButton = document.getElementById("userAddButton")

let userTaskListContainer = document.getElementById("todoUList")



function createAndAppendList(userEnterdData){

    let listElement =  document.createElement("li")

    listElement.textContent = userEnterdData


    userTaskListContainer.appendChild(listElement)




}


userInputButton.onclick = function () {

    createAndAppendList(userInputValue.value)

}




