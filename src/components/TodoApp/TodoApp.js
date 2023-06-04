import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import styles from './TodoApp.module.css'
import TodoObj from '../../todoObject'

function TodoApp() {
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = (text) => {
    setTodoList([...todoList, new TodoObj(text)])
  }

  return (
    <div className={styles.todoApp}>
      <h1 className={styles.todoTitle}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default TodoApp
