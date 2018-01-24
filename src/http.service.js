import request from 'superagent'

class Http {
  constructor(request) {
    this.request = request;
  }

  // -----------------------------------------
  // Http Request Methods
  // -----------------------------------------

  // { query: 'Manny', range: '1..5', order: 'desc' }
  get(url, query = {}) {
    return this.request
      .get(url)
      // .set('Bearer', token)
      .set('Content-Type', 'application/json')
      .timeout({
        response: 5000,                                                                 // Wait 5 seconds for the server to start sending,
        deadline: 60000,                                                                // but allow 1 minute for the file to finish loading.
      })
      .query(query)
      .on('error', this.errorHandler)
      .on('progress', event => {
        // console.log(event)
      })
      .ok(res => res.status === 200)
      .then(response => {
        return response.body;
      })
  }

  // {"name":"tj","pet":"tobi"}
  post(url, query = {}) {
    return this.request
      .post(url)
      // .set('Bearer', token)
      .set('Content-Type', 'application/json')
      .timeout({
        response: 5000,                                                                 // Wait 5 seconds for the server to start sending,
        deadline: 60000,                                                                // but allow 1 minute for the file to finish loading.
      })
      .send(query)
      .on('error', this.errorHandler)
      .on('progress', event => {
        // console.log(event)
      })
      .ok(res => res.status === 200)
      .then(response => {
        return response.body;
      })
  }

  // { id: id }
  delete(url, query = {}) {
    return this.request
      .del(url)
      .timeout({
        response: 5000,                                                                 // Wait 5 seconds for the server to start sending,
        deadline: 60000,                                                                // but allow 1 minute for the file to finish loading.
      })
      .send(query)
      .on('error', this.errorHandler)
      .ok(res => res.status === 200)
      .then(response => {
        return response.body;
      })
  }

  // -----------------------------------------
  // Error Handler
  // -----------------------------------------

  errorHandler(err) {
    if (err.timeout) {
      return 'timed out!';
    } else if (err.status === 404) {
      return 'oh no ' + err.body.message;
    } else {
      return 'error';
      // all other error types we handle generically
    }
  }
}

export default new Http(request);