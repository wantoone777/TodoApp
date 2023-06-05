import { CiSquareRemove, CiSquareCheck } from 'react-icons/ci'
import { HiPuzzle } from 'react-icons/hi'
import styles from './Todo.module.css'

function Todo(props) {
	const { todo, removeTodo, toggleCondition, index } = props

	const tierClass =
		todo.flag.toLowerCase() === 's'
			? styles.SLVL
			: todo.flag.toLowerCase() === 'a'
			? styles.ALVL
			: todo.flag.toLowerCase() === 'b'
			? styles.BLVL
			: ''

	return (
		<li
			className={`${styles.todoBlock} ${
				todo.isCompleted ? styles.completedTodo : ''
			}`}
		>
			<span className={styles.svgContainer}>
				<HiPuzzle className={`${styles.taskIcon} ${tierClass}`} />
			</span>
			<div className={styles.todoInfo}>
				<div className={styles.text}>{index + 1}.{todo.text}</div>
				<div className={styles.timeBlock}>
					<span className={styles.importance}>Tier: {todo.flag} | </span>{' '}
					<span className={styles.time}>{todo.time}</span>
				</div>
			</div>
			<div className={styles.iconContainer}>
				<CiSquareRemove
					className={styles.iconRemove}
					onClick={(e) => removeTodo(todo.todoId)}
				/>
				<CiSquareCheck
					className={styles.iconCheck}
					onClick={(e) => toggleCondition(todo.todoId)}
				/>
			</div>
		</li>
	)
}

export default Todo
