import mongoose from 'mongoose'
const { Schema } = mongoose

const MongoClient = require('mongodb').MongoClient
const uri =
	'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect((err) => {
	const collection = client.db('test').collection('devices')
	client.close()
})
mongoose
	.connect(
		process.env.MONGODB_URI || {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	)
	.then(() => console.log('MongoDB connected'))
	.catch((error) => console.log(`MongoDB connection error: ${error}`))

ContactSchema = new Schema({
	name: String,
	email: String,
	message: String,
})

const Contact = mongoose.model('Contact', ContactSchema)

App.post('/api/contact', (req, res) => {
	const { name, email, message } = req.body

	const newContact = new Contact({
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		name,
		email,
		message,
	})

	newContact
		.save()
		.then((contact) => {
			console.log(`Saved contact: ${contact}`)
			res.send(contact)
		})
		.catch((error) => console.log(`Error saving contact: ${error}`))
})
