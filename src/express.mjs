import express from 'express'
import bodyParser from 'body-parser'
const app = express()

app.post('/api/user', (req, res) => {
	const userData = req.body
	res.send
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8000, () => {
	console.log('Server started on port 8000')
})
