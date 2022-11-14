import axios from "axios"

class JYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

// const jyRequest1  = new JYRequest('http://123.207.32.32:9001')
// const jyRequest2  = new JYRequest()

export default new JYRequest('http://123.207.32.32:9001')