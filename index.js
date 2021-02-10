const express = require('express')
const app = express()
const port = 3000

// tryimg to primt out Hello World

app.get('/', (req, res) => {
	res.send('Hello World Deji')
})

// jskdjdks dk djd js xksnka kd le ak xks kdnks  zknksmsk

// now we are trying to creating server

app.listen(port, () => {
	console.log('My server is runnin on http://localhost:3000 or http://127.0.0.1:${port}')

})
