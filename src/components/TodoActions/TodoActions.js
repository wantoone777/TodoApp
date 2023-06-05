import { RxSymbol, RxScissors } from 'react-icons/rx'
import Button from '../UI/Button'
import styles from './TodoActions.module.css'

function TodoActions({ clearAllTodos, clearAllDoneTodos }) {
	return (
		<div className={styles.todoActionsContainer}>
			<Button className={styles.button} title="Clear all todo tasks" onClick={clearAllTodos}>
				<RxSymbol />
			</Button>
			<Button className={styles.button} title="Remove done todo tasks" onClick={clearAllDoneTodos}>
				<RxScissors />
			</Button>
		</div>
	)
}

export default TodoActions
