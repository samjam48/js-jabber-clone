import qs from 'qs'
import axios from 'axios'
import {copy} from 'copy-paste'

export default shortenUrl

function shortenUrl({
  alias: custom,
  apiKey: api = getApiKey(),
  date,
  noCopy,
}) {
  const url = `http://javascriptair.com/episodes/${date}`
  const query = qs.stringify({custom, url, api})
  return axios.get(`https://hive.am/api?${query}`).then(onFinished, onFailure)

  function onFinished(response) {
    const {data: {error, short}} = response
    const NO_ERROR = 0
    if (error !== NO_ERROR) {
      return onFailure(response)
    }
    if (noCopy) {
      return Promise.resolve(short)
    }
    return new Promise((resolve, reject) => {
      copy(short, err => {
        if (err) {
          reject(err)
        }
        console.log(`short url created. ${short} copied to your clipboard`)
        resolve(short)
      })
    })
  }

}

function getApiKey() {
  try {
    return require('./hive.api.ignored.json').key // eslint-disable-line global-require
  } catch (e) {
    throw new Error('you must provide an API key or have a hive.api.ignored.json')
  }
}

function onFailure(rejection) {
  console.error('There was a failure :-(')
  console.error(rejection)
  return Promise.reject(rejection)
}
