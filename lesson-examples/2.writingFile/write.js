const fs = require('fs')

fs.writeFile('./message.txt', "Hello World!", err => {
  if (err) {
    return console.log(err)
  }

  console.log('File written')
})
