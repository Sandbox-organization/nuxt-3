export default () => {
  const runtimeConfig = useRuntimeConfig()

  const API_BASE_URL = runtimeConfig.API_BASE_URL

  const request = ( url = '', options = {} ) => (
    $fetch( API_BASE_URL + url, options )
  )

  return request
}