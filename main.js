
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

        
//call initial function
init();
