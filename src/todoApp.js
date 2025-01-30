const ulProjectsElm = document.querySelector('#projects-ul');
const newProjectBtn = document.querySelector('#new-project-btn');

// Array to store all the user's projects
const userProjects = [];

document.addEventListener('click', (e) => {
    switch (e) {
        case newProjectBtn:
            newProjectModal.showModal();
            break;
        default:
            console.log('C H A M O');
            break;
    }
})

class Project {
    constructor(name, description, deadline) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.tasks = [];
        userProjects.push(this);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
}
class Task {
    constructor(name, description, deadline, priority) {
        this.name = name;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
    }
}

const novaProject = new Project('nova', 'My first project for the todo app', '01/03/2025');