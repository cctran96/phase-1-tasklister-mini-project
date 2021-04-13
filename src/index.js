document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#create-task-form')
  const input = document.querySelector('#new-task-description')
  const list = document.querySelector('#tasks')
  const select = document.createElement('select')
  const option1 = document.createElement('option')
  const option2 = document.createElement('option')
  const option3 = document.createElement('option')

  option1.innerText = 'High'
  option2.innerText = 'Medium'
  option3.innerText = 'Low'

  select.appendChild(option1)
  select.appendChild(option2)
  select.appendChild(option3)
  form.appendChild(select)

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.innerText = input.value + ' '
    button.innerText = 'X'
    list.appendChild(li).appendChild(button)

    switch(select.value) {
      case 'High':
        li.style.color = 'red'
        break
      case 'Medium':
        li.style.color = 'yellow'
        break
      default:
        li.style.color = 'green'
    }

    button.addEventListener('click', () => list.removeChild(li))
    form.reset()
  })

})