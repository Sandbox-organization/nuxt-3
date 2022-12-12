export default class TodoModel {
  constructor( data ) {
    this.completed = data.completed
    this.id = data.id
    this.title = data.title
    this.userId = data.userId
  }

  toJSON() {
    return { ...this }
  }

  print() {
    console.log( this )
  }
}