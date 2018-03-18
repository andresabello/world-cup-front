export const STATUS = 'local'

let secrets = {
    API_LOCAL : 'secret',
    API_STAGING   : 'secret',
    API_PRODUCTION : 'secret'
}

export const BASE_URL =  {
    'local' : 'http://reminder-app.localhost/',
    'staging' : 'http://reminder-app.piboutique.com/',
    'production' : 'https://reminder.com/',
}

export const API_URL = BASE_URL[STATUS] + 'api/v1/'
export const BASE_TOKEN = BASE_URL[STATUS]

let secret = getSecret(STATUS)
const CLIENT_SECRET = secrets[ secret ]

function getSecret(value = ''){
    return 'API_' + value.toUpperCase()
}

export default {
    oauth : {
        grand_type : 'password',
        client_id : 1,
        client_secret : CLIENT_SECRET,
        scope : '*'
    },
    default_storage : 'Cookies',
    oauth_type: 'Bearer'
}