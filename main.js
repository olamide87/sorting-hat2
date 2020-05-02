
const students = [];

const houses = [
  'Slytherin',
  'Ravenclaw',
  'Gryffindor',
  'Hufflepuff',
];


// function to print elements to DOM 
const studentBuilder = (arrayToPrint) => {
  let domString = '';
  students.forEach((student)=> {
    domString += '<div class="card col-3">';
    domString += `<p class="name">${student.name}</p>`;
    domString += `<p class="house">${student.house}</p>`;
    domString += '<button class="btn btn-danger">Expel</button>';
    domString += '</div>';
        });

    printToDom('students', domString)
        };

// displayForm function that calls the element form by id and uses the method to remove the class hide 
const displayForm = () => {
  const form = document.getElementById('form');
  form.classList.toggle('hide');
}

// event listener function that calls the method by id and uses the method event listener
const eventListener = () => {
  document.getElementById('sorting').addEventListener('click',displayForm);
}


//initial function that contains all functions 
const init = () => {
  eventListener();
}
 
        
//call initial function
init();
