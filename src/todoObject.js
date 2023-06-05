import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

class TodoObj {
  constructor(text, flag) {
    this.flag = flag
    this.todoId = uuidv4()
    this.text = text
    this.time = moment().format('Do h:mm a') // June 4th, 10:35:08 pm
    this.isCompleted = false
  }
  getInfo() {
    console.log(
      `From Todo obj ${this.text} ${this.time} ${this.isCompleted} Flag is ${this.flag}`
    )
  }
}

export default TodoObj
