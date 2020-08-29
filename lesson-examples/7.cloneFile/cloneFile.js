// Read from a file and write its content onto another file called output.txt

const fs = require('fs')

fs.readFile('./peace.txt', (err, file) => {
  if (err) return console.log(err)
  console.log('Loaded first file', file)

  fs.writeFile('peace_clone.txt', file, (err) => {
    if (err) return console.log(err)
    console.log('==== MERGED AUDIO FINISHED ====')
  })
})
