import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import styles from './TodoApp.module.css'
import TodoObj from '../../todoObject'
import Modal from '../UI/Modal'
import ModalButton from '../UI/ModalButton'

function TodoApp() {
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = (text, flag) => {
    setTodoList([...todoList, new TodoObj(text, flag)])
  }

  return (
    <div className={styles.todoApp}>
      <h1 className={styles.todoTitle}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todoList={todoList} />




      {/*Modal*/}
      <Modal body="There are some LVL for your todo. S, A, B" title="Use Tier lvls for your Todos!" accept="Accept" close="close" />

    </div>
  )
}

export default TodoApp
