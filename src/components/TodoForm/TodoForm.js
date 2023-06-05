import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'
import ModalButton from '../UI/ModalButton'

function TodoForm(props) {
	const { addTodo } = props
	const [inputText, setInputText] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()

		if (inputText !== '') {
			const [text, flag='Standard'] = inputText.split('#')
			addTodo(text, flag === 'Standard' ? flag : flag.toUpperCase())
			setInputText('')
		}
	}

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} action="" onSubmit={onSubmitHandler}>
				<ModalButton buttonText="" />
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
