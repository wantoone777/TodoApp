import { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import TodoActions from '../TodoActions/TodoActions'
import styles from './TodoApp.module.css'
import TodoObj from '../../todoObject'
import Modal from '../UI/Modal'
import ModalButton from '../UI/ModalButton'

function TodoApp() {
  const [todoList, setTodoList] = useState([])

  const addTodoHandler = (text, flag) => {
    setTodoList([...todoList, new TodoObj(text, flag)])
  }

  const removeTodoHandler = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.todoId !== todoId))
  }

  const toggleConditionHandler = (todoId) => {
    todoList.forEach((todo) => (todo.todoId === todoId && (todo.isCompleted = !todo.isCompleted)))
    setTodoList([...todoList])
  }

  const clearAllTodosHandler = () => {
    setTodoList([])
  }

  const clearAllDoneTodosHandler = () => {
    setTodoList(todoList.filter((todo) => !todo.isCompleted))
  }

  const completedTodoTasksCount = todoList.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.todoApp}>
      <h1 className={styles.todoTitle}>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoActions clearAllTodos={clearAllTodosHandler} clearAllDoneTodos={clearAllDoneTodosHandler} />
      { !!todoList.length ? <TodoList todoList={todoList} removeTodo={removeTodoHandler} toggleCondition={toggleConditionHandler} /> : <h3 className={styles.emptyList}>Todo list is empty</h3>}
      {!!completedTodoTasksCount ? <p className={styles.doneCount}>You have done {completedTodoTasksCount} {completedTodoTasksCount === 1 ? 'todo' : 'todos'}</p> : <></> }



      {/*Modal*/}
      <Modal body="" title="" accept="" close="" />

    </div>
  )
}

export default TodoApp
