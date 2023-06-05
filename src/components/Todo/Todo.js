import { CiLemon, CiSquareRemove, CiSquareCheck } from 'react-icons/ci'
import { HiPuzzle } from 'react-icons/hi'
import styles from './Todo.module.css'

function Todo(props) {
  const { todo, removeTodo, toggleCondition } = props

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
      <HiPuzzle className={`${styles.taskIcon} ${tierClass}`} />
      <div className={styles.todoInfo}>
        <div className={styles.text}>{todo.text}</div>
        <div className={styles.time}>
          {/*{todo.isCompleted && <span className={styles.todoDone}>Done</span>}{' '}*/}
          Importance: {todo.flag} | {todo.time}
        </div>
      </div>
      <div>
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
