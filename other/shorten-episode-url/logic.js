import inquirer from 'inquirer'
import inquirerDirectory from 'inquirer-directory'
import shortenUrl from '../shorten-url'
import episodeList from '../utils/episode-list'

export default beginPrompt

function beginPrompt(episodeData, noCopy) {
  inquirer.registerPrompt('directory', inquirerDirectory)

  return getCustomAlias()
    .then(getApiKey)
    .then(shortenUrl)
    .catch(logFailure)

  function getCustomAlias(data = {}) {
    return getEpisodeInfo().then(({title, date}) => {
      return inquirer.prompt([
        {
          name: 'alias',
          type: 'input',
          message: 'What alias do you want?',
          default: getNameSuggestionFromEpisodeTitle(title),
        },
      ]).then(({alias}) => ({...data, alias, date}))
    })

    function getNameSuggestionFromEpisodeTitle(title) {
      return title
      .toLowerCase()
      .replace(/\W/g, ' ')
      .split(' ')
      .reduce((t, w) => {
        if (!t) {
          return w
        } else if (t.length > 6) {
          return t
        } else {
          return `${t}-${w}`
        }
      }, '')
      .trim()
    }

    function getEpisodeInfo() {
      if (episodeData) {
        return Promise.resolve(episodeData)
      }
      return inquirer.prompt([
        {
          ...episodeList,
          message: 'Which episode are you short-linking?',
        },
      ]).then(({episode: {title, date}}) => ({title, date}))
    }
  }

  function getApiKey(data = {}) {
    let key
    try {
      key = require('../hive.api.ignored.json').key // eslint-disable-line global-require
    } catch (e) {
      key = null
    }
    return inquirer.prompt([
      {
        name: 'key',
        type: 'input',
        message: `What's your API key for hive.am?`,
        default: key,
      },
    ]).then(({key: apiKey}) => ({...data, apiKey, noCopy}))
  }

  function logFailure(rejection) {
    console.error('There was a failure :-(')
    console.error(rejection)
  }
}
