// Query for the submit button and input task field
const submit = document.querySelector('button[type="submit"]');
const newTask = document.querySelector('input[name="task"]');

// Disable the submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', () => {
    // Enable/disable submit button based on input content
    submit.disabled = newTask.value.trim() === '';
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
    
    // Find the task the user just submitted
    const taskText = newTask.value.trim();
    if (taskText === '') return; // Don't add empty tasks
    
    // Create a list item for the new task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    
    // Add new element to our unordered list
    document.querySelector('ul').append(listItem);
    
    // Clear the input field and disable submit button again
    newTask.value = '';
    submit.disabled = true;
    
    return false; // Additional prevention of default submission
});