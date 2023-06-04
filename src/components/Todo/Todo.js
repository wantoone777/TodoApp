import { CiLemon, CiSquareRemove, CiSquareCheck } from 'react-icons/ci'
import styles from './Todo.module.css'

function Todo(props) {
	const { todo } = props
	return (
		<li className={styles.todoBlock}>
			<CiLemon className={styles.taskIcon} />
			<div className={styles.todoInfo}>
				<div className={styles.text}>{todo.text}</div>
				<div className={styles.time}>{todo.time}</div>
			</div>
			<div>
				<CiSquareRemove className={styles.iconRemove} />
				<CiSquareCheck className={styles.iconCheck} />
			</div>
		</li>
	)
}

export default Todo
