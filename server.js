const express = require('express')

const server = express()

const PORT = process.env.PORT || 5000

server.get('/api/users', (req, res) => {
  let users = [
    { id: 1, name: 'Марат', age: 19 },
    { id: 2, name: 'Даша', age: 17 },
    { id: 3, name: 'Маша', age: 19 },
    { id: 3, name: 'Маша', age: 19 },
    { id: 3, name: 'Маша', age: 19 },
    { id: 3, name: 'Маша', age: 19 },
    { id: 3, name: 'Маша', age: 19 },
  ]

  res.json(users)
})

server.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`)
})
