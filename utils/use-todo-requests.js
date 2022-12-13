export default () => {
  const apiRequest = useApiRequest()

  return {
    get: ( options = {} ) => (
      apiRequest( '/todos', options )
    )
  }
}