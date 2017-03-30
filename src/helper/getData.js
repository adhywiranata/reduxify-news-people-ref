export function getData(link, callback) {
  fetch(link, {
  	method: 'get',
  })
  .then(result => {
    return result.json()
  })
  .then(data => {
    callback(data)
  })
}
