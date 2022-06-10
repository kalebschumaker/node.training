'use strict'

const { EventEmitter } = require('events')
const http = require('http')
const server = http.createServer()
const port = parseInt(process.argv[2], 10) || 8000

server.on('request', function onRequest (req, res) {
  console.log(req.url)


    
  if (req.url === '/aboutme') {
    res.writeHead(200)
    res.write('This is my about me page')
    res.end(req.url)
    return
  }

  if (req.url === '/facts') {
    res.writeHead(200)
    res.write('This is facts page')
    res.end(req.url)
    return
  }

  if (req.url === '/contact') {
    res.writeHead(200)
    res.write('This is my about me page')
    res.end(req.url)
    return
  }
  
  else 
  res.writeHead(404)
  res.end('We dont have this page')
}
)

server.listen(port)
console.log('Listening on port %d', port)
