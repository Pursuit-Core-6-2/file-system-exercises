const fs = require('fs');

fs.readFile('student.json', (err, data) => {
  if (err) {
    throw err;
  }
  const student = JSON.parse(data);
  student.city = 'NYC'
  console.log(student);

});

console.log('This is after the read call, but executed FIRST!');
