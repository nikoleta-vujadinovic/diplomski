const baseUrl = "http://localhost:8080/api"

const toJSON = (response) => {
  if (!response.ok) {
    return null
  }
  return response.json()
}

const commonHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

class Api {
  get = (url) => {
    const requestOptions = {
      method: "GET",
      headers: { ...commonHeader },
      credentials: "include",
    }
    return fetch(baseUrl + url, requestOptions).then(toJSON)
  }

  post = (url, payload = {}) => {
    const requestOptions = {
      method: "POST",
      headers: { ...commonHeader },
      body: JSON.stringify(payload),
      credentials: "include",
    }
    return fetch(baseUrl + url, requestOptions).then(toJSON)
  }

  put = (url, payload = {}) => {
    const requestOptions = {
      method: "PUT",
      headers: { ...commonHeader },
      body: JSON.stringify(payload),
      credentials: "include",
    }
    return fetch(baseUrl + url, requestOptions).then(toJSON)
  }

  delete = (url) => {
    const requestOptions = {
      method: "DELETE",
      headers: { ...commonHeader },
      credentials: "include",
    }
    return fetch(baseUrl + url, requestOptions)
  }
}
export const api = new Api()
