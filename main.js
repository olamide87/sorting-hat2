
const students = [];

const houses = [
  'Slytherin',
  'Ravenclaw',
  'Gryffindor',
  'Hufflepuff',
];

const getRandomHouse = (max) => {
  return Math.floor(Math.random()*Math.floor(max))
}

// functions that tells what to print by ID and to talk to html
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}


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

// createCard function uses getElementById to grab input field & to store name values
const createCard = (e) => {
  e.preventDefault();
  let inputName = document.getElementById('inputName').value;
  const newName = {
    name:inputName,
    house:houses[getRandomHouse(4)]
  // id:`student${counter}`
           }
  students.push(newName);
  // counter++;
  studentBuilder(students);
  inputName = ' ';
}

// displayForm function that calls the element form by id and uses the method to remove the class hide 
const displayForm = () => {
  const form = document.getElementById('form');
  form.classList.toggle('hide');
}


// event listener function that calls the method by id and uses the method event listener
const eventListener = () => {
  document.getElementById('sorting').addEventListener('click',displayForm);
  document.getElementById('addStudentBtn').addEventListener('click',createCard);
}


//initial function that contains all functions 
const init = () => {
  eventListener();
}
 
        
//call initial function
init();
