import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
  const { todoList } = props
  return (
    !!todoList.length && (
      <ul className={styles.todoList}>
        {todoList.map((todo) => (
          <Todo todo={todo} key={todo.todoId} />
        ))}
      </ul>
    )
  )
}

export default TodoList
