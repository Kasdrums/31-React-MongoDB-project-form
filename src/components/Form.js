import { useState } from 'react'
import axios from 'axios'

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})
	}
	const handleSubmit = (event) => {
		event.preventDefault()
	}
	axios
		.post('/api/contact', formData)
		.then((response) => console.log(response.data))
		.catch((eror) => console.log(eror))

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<label>
				Message:
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
				></textarea>
			</label>
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form
