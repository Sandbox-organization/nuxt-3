export default () => {
  const Requests = useTodoRequests()
  const Model = useTodoModel

  const list = useState( 'todo-list', () => [] )

  const fetch = async () => {
    const data = await Requests.get()
    list.value = data.map( el => new Model( el ) )
  }

  return {
    list,
    fetch
  }
}