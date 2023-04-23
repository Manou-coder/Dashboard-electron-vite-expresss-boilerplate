import express from 'express'
const app = express()
// Main route
app.get('/', (req, res) => {
  console.log('req: ', req)
  res.send('Welcome to my Express server!')
})

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})
