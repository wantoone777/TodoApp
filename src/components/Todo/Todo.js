import { CiLemon, CiSquareRemove, CiSquareCheck } from 'react-icons/ci'
import { HiPuzzle } from 'react-icons/hi'
import styles from './Todo.module.css'

function Todo(props) {
	const { todo } = props
	// if (todo.flag.toLowerCase() === 's') {
	// 	const tierPlace = styles.SLVL
	// } else if ( todo.flag.toLowerCase() === 'a' ) {
	// 	const tierPlace = styles.ALVL
	// } else if ( todo.flag.toLowerCase() === 'b' ) {
	// 	const tierPlace = styles.BLVL
	// } else {
	// 	const tierPlace = ''
	// }

	const tierClass = (todo.flag.toLowerCase() === 's') ? styles.SLVL : (( todo.flag.toLowerCase() === 'a' ) ?  styles.ALVL : (( todo.flag.toLowerCase() === 'b' ) ? styles.BLVL : ''))

	return (
		<li className={styles.todoBlock}>
			<HiPuzzle className={`${styles.taskIcon} ${tierClass}`} />
			<div className={styles.todoInfo}>
				<div className={styles.text}>{todo.text}</div>
				<div className={styles.time}>Importance: {todo.flag} | {todo.time}</div>
			</div>
			<div>
				<CiSquareRemove className={styles.iconRemove} />
				<CiSquareCheck className={styles.iconCheck} />
			</div>
		</li>
	)
}

export default Todo
