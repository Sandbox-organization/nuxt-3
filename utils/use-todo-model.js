export default class TodoModel {
  toJSON() {
    return { ...this }
  }

  constructor( data ) {
    this.completed = data.completed
    this.id = data.id
    this.title = data.title
    this.userId = data.userId
  }
}