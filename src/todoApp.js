// const addTaskButton = document.querySelector('#addTaskButton');
// const newTaskInput = document.querySelector('input');
// const boxUl = document.querySelector('ul');

// addTaskButton.addEventListener('click', () => {
//     addTask();
// });

// // Using event delegation instead of individual listeners
// boxUl.addEventListener('click', (event) => {
//     const target = event.target;
    
//     // Handle click on the icon inside the button
//     if (target.tagName === 'I') {
//         const button = target.parentElement;
//         const li = button.parentElement;
        
//         if (button.id === 'checkButton') {
//             li.classList.toggle('checked');
//         } else if (button.id === 'trashButton') {
//             li.remove();
//         }
//     }
    
//     // Handle click directly on the button
//     if (target.tagName === 'BUTTON') {
//         const li = target.parentElement;
        
//         if (target.id === 'checkButton') {
//             li.classList.toggle('checked');
//         } else if (target.id === 'trashButton') {
//             li.remove();
//         }
//     }
// });

// newTaskInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         addTaskButton.click();
//     }
// });

// function addTask() {
//     if (newTaskInput.value === '') {       
//         alert('Ingresa una tarea!')
//     } else {
//         const task = newTaskInput.value;
//         newTaskInput.value = '';
//         let newTask = document.createElement('li');
//         newTask.innerHTML = `
//         ${task} <button id="checkButton"><i class="fa-solid fa-check"></i>
//         </button><button id="trashButton"><i class="fa-solid fa-trash"></i></button>`;
//         boxUl.appendChild(newTask);
//     }
// }