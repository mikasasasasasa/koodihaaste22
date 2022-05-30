/* eslint-disable no-param-reassign */
const axios = require('axios')

function fetchV1(url, options) {
  options = {
    ...options,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  }

  url = `/api/v1/${url}`
  return axios(url, {
    ...options,
  }).then((response) => response.data)
}

export default fetchV1
