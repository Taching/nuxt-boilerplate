import Axios from 'axios'
Axios.defaults.withCredentials = true
const api = {
  getCsrf() {
    const csrftoken = $nuxt.$store.state.user.csrftoken
    const requestHeader = {
      headers: {
        'X-CSRFToken': csrftoken,
      },
    }

    return requestHeader
  },
  get(url, request) {
    const requestHeader = this.getCsrf()

    return Axios.get(url, request, requestHeader)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  post(url, request) {
    const requestHeader = this.getCsrf()

    return Axios.post(url, request, requestHeader)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  patch(url, request) {
    const requestHeader = this.getCsrf()

    return Axios.patch(url, request, requestHeader)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  delete(url) {
    const csrftoken = $nuxt.$store.state.user.csrftoken
    const requestHeaderWithNullData = {
      headers: {
        'X-CSRFToken': csrftoken,
      },
      data: {},
    }

    return Axios.delete(url, requestHeaderWithNullData)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
}

export default api
