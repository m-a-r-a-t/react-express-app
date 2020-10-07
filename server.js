const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const parser = require('body-parser')
const {  users, PORT} = require('./store')
const { getUser} = require('./usersFuncs')
const { messageCreator} = require('./dialogFuncs')
const helmet = require('helmet')
const compression = require('compression')
//app.get('/', (req, res) => res.json(users))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(parser.json())
app.use(parser.urlencoded({extended: true,}))
app.use(helmet())
app.use(compression())



app.post('/login', (req, res) => res.status(200).end())

io.on('connection', (socket) => {

  socket.on('join', ({ name,room,action,length}, callback) => {  

    room!=null? socket.join(room) : socket.join(socket.id)
    let roomKey=room? room:socket.id
    users.push({ id: socket.id, name: name, })

    console.log(`User ${name} connected to room `)

    callback(messageCreator('SERVER',1,'Welcome to chat !!!'),roomKey)

    socket.broadcast.to(roomKey).emit('refreshMessages',
     {
       name:'SERVER',
      id:length,
      message:`User ${name} joined !`
     })
  })

  socket.on('sendMessage', ({ message,name,room,length}) => {
   if(message==='')return
    io.to(room).emit('refreshMessages',{ ...messageCreator(name, length+1, message) })
  
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
    users.splice(users.indexOf(socket), 1)
    console.log(users)
  })
})

http.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`)
})