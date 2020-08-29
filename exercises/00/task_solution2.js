const fs = require('fs')

// Read my-files.txt, "split in rows and columns" and console.log only the filenames

fs.readFile('./my-files.txt', (err, data) => {
  const text = data.toString()
  const fileRows = text.split('\n')

  let fileNames = []
  for (let file of fileRows) {
    let fileSplit = file.split(' ')
    let fileClean = fileSplit.filter(data => data !== '')
    let fileName = fileClean.slice(8).join(' ')

    if (fileName !== '.' && fileName !== '..' && fileName !== '') {
      fileNames.push(fileName)
    }
  }

  const fileExtMap = {}
  for (let name of fileNames) {
    let nameSplit = name.split('.')
    let ext = nameSplit[nameSplit.length - 1]
    if (!fileExtMap[ext]) {
      fileExtMap[ext] = [name]
    } else {
      fileExtMap[ext].push(name)
    }
  }

  fs.writeFile('output.json', JSON.stringify(fileExtMap, null, 2), err => {
    if (err) throw err
    console.log('WROTE JSON')
  })
})
