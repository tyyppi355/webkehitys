// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    const task = document.getElementById('task');
    const output = document.getElementById('output');
    let message = '';

    if (task.value) {

        tasks.push(task.value);
        message = '<h2>To-Do</h2><ol>';
        for (let i = 0; i < tasks.length; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;

    }
    return false;

}

function removeDuplicates() {
    'use strict';
    const output = document.getElementById('output');
    tasks = [...new Set(tasks)];
    let message = '<h2>To-Do</h2><ol>';

    for (let i = 0; i < tasks.length; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
    return false;
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('remove').addEventListener("click", removeDuplicates)
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;