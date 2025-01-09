const addTaskButton = document.querySelector('#addTaskButton');
const newTaskInput = document.querySelector('input');
let task = '';
const boxUl = document.querySelector('ul');


addTaskButton.addEventListener('click', () => {
    addTask();

    if (boxUl.childNodes.length > 0) {
        
        const trashButtons = document.querySelectorAll('#trashButton');
        const checkButtons = document.querySelectorAll('#checkButton');

        trashButtons.forEach((button) => {
            
            button.addEventListener('click', () => {
                button.parentElement.remove()
            })
        })

        checkButtons.forEach((button) => {

            button.addEventListener('click', () => {
                button.parentElement.classList.toggle('checked')
            })
        })

    }
})

newTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTaskButton.click();
    }
})


function addTask() {

    if (newTaskInput.value === '') {       
        alert('Ingresa una tarea!')
    } else {
        task = newTaskInput.value;
        newTaskInput.value = '';
        let newTask = document.createElement('li');
        newTask.innerHTML = `
        ${task} <button id="checkButton"><i class="fa-solid fa-check"></i>
        </button><button id="trashButton"><i class="fa-solid fa-trash"></i></button> `;
        boxUl.appendChild(newTask);
    }
}


