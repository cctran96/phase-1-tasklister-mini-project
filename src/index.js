document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#create-task-form")
const tasks = document.querySelector("#tasks")
const label = document.querySelector("#new-task-description")

function handleSubmit(event) {
  event.preventDefault()

  const li = document.createElement('li')
  li.innerText = label.value + " "
  tasks.appendChild(li)
  event.target.reset()
  
  const button = document.createElement('button')
  button.innerText = "X"
  li.appendChild(button)
  button.addEventListener('click', deleteItem)
}

function deleteItem(event) {
  this.parentNode.remove()
}
form.addEventListener('submit', handleSubmit) 
});
