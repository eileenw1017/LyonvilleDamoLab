import axios from 'axios'

const endpointUrl = 'https://lyonville-url.com'

/**
 * The function fetchHomeData uses axios to make an asynchronous GET request to
 * the endpoint url and returns the response data.
 * @returns The function `fetchData` is returning the `data` property from the
 * response of the GET request to 'endpointUrl'.
 */
export const fetchData = async (page) => {
  const { data } = await axios.get(`${endpointUrl}/${page}`)
  return data
}
