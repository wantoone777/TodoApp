import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

function TodoList(props) {
  const { todoList, removeTodo, toggleCondition } = props
  return (
    !!todoList.length && (
      <ul className={styles.todoList}>
        {todoList.map((todo) => (
          <Todo todo={todo} key={todo.todoId} removeTodo={removeTodo} toggleCondition={toggleCondition} />
        ))}
      </ul>
    )
  )
}

export default TodoList
