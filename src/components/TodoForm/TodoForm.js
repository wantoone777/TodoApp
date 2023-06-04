import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm(props) {
	const { addTodo } = props
	const [inputText, setInputText] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()

		if (inputText !== '') {
			addTodo(inputText)
			setInputText('')
		}
	}

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} action="" onSubmit={onSubmitHandler}>
				<input
					className={styles.input}
					type="text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<Button>Create</Button>
			</form>
		</div>
	)
}

export default TodoForm
