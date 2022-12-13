const useApiRequest = () => {
  const runtimeConfig = useRuntimeConfig()
  const API_BASE_URL = runtimeConfig.API_BASE_URL
  
  const request = ( route = '', options = {} ) => {
    const url = API_BASE_URL + route
    return $fetch( url, options )
  }
  return request
}

export { useApiRequest }

export default () => {
  const request = useApiRequest()
  
  return {
    getUsers: ( options = {} ) => (
      request( '/users', options )
    ),
    getUserById: ( id, options = {} ) => {
      const route = '/users/' + id 
      return request( route, options )
    },
    getUserTodos: ( userId, options = {} ) => {
      const route = '/users/' + userId + '/todos'
      return request( route, options )
    }
  }
}