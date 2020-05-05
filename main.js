
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
    domString += '<div id="delete" class="card col-3">';
    domString += `<p class="name">${student.name}</p>`;
    domString += `<p class="house">${student.house}</p>`;
    domString += `<button id="${student.id}" class="btn btn-danger expel">Expel</button>`;
    domString += '</div>';
        });

    printToDom('students', domString)
    addExpelClickEvent()
        };


// createCard function uses getElementById to grab input field & to store name values
const createCard = (e) => {
  e.preventDefault();
  let inputName = document.getElementById('inputName').value;
  const newName = {
    name:inputName,
    house:houses[getRandomHouse(4)],
    id:'id' + (new Date()).getTime()
           }
  students.push(newName);
  console.log(students);
  studentBuilder(students);
  inputName = ' ';
}

// displayForm function that calls the element form by id and uses the method to remove the class hide 
const displayForm = () => {
  const form = document.getElementById('form');
  form.classList.toggle('hide');
}

// function that loops through all objects and adds click event to expel button on each object card
const addExpelClickEvent = () => {
const allButtons = document.querySelectorAll('.expel')
  for (let i =0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', expel);
    console.log(allButtons[i]);
  }
};



// expel click event function
const expel = (e) => {
  for (let i = 0; i < students.length; i++) {
    if (e.target.id === students[i].id) {
      students.splice(i, 1);
      }
  }
  studentBuilder(students);
};


// event listener function that calls the object by id and uses the method event listener
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
