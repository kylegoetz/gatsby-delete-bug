const http = require('http')
const port = 10000

const requestHandler = (request, response) => {
  let body = ''
  request.on('data', chunk => {
    body += chunk.toString()
  })
  request.on('end', () => {
    console.log('body:',body)
    response.end(body)
  })
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if(err) {
    return console.error('Could not create server', err)
  }

  console.log(`Server listening on port ${port}`)
})
