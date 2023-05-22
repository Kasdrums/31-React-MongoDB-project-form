const Form = () => {
	return
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
    
    const handleChange = () => {
        setFormData ({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    (
		<form>
			<label>
				Name:
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
			</label>
			<label>
				Email:
				<input type="email" name="email" value="" onChange="" />
			</label>
			<label>
				Message:
				<textarea name="message" value="" onChange=""></textarea>
			</label>
			<button type="submit">Submit</button>
		</form>,
	)
}

export default Form
