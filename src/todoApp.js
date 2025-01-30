// const ulProjectsElm = document.querySelector('#projects-ul');
// const newProjectBtn = document.querySelector('#new-project-btn');

// Array to store all the user's projects
const userProjects = [];

class Project {
    constructor(name, priority, description, deadline) {
        this.name = name;
        this.priority = priority;
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
    constructor(name) {

    }
}

const novaProject = new Project('nova', "high", 'My first project for the todo app', '01/03/2025');
novaProject.addTask('C H A M O')
novaProject.addTask('C H A M O S')


console.log(novaProject.tasks)