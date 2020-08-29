const fs = require('fs');

const student = {
  name: 'Mike',
  age: 23,
  gender: 'Male',
  department: 'English',
  car: 'Honda'
};

const data = JSON.stringify(student, null, 2);

fs.writeFile('mike-the-student.json', data, (err) => {
  if (err) {
    throw err;
  }
  console.log('Data written to file');
});

console.log('This is after the write call??');
