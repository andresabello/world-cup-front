export const STATUS = 'local'

let secrets = {
    API_LOCAL: '0jrTKqBqZ8Aj3QGnkfKnNe0SSt4CeJPPugZgbqY8',
    API_STAGING: 'secret',
    API_PRODUCTION: 'secret'
}

let keys = {
    API_LOCAL: 'Test',
    API_STAGING: 1,
    API_PRODUCTION: 1
}

export const BASE_URL = {
    'local': 'http://reminder-app.localhost/',
    'staging': 'http://reminder-app.piboutique.com/',
    'production': 'https://reminder.com/',
}

export const API_URL = BASE_URL[STATUS] + 'api/v1/'
export const BASE_TOKEN = BASE_URL[STATUS]

let secret = getSecret(STATUS)
const CLIENT_SECRET = secrets[secret]
const CLIENT_ID = keys[secret]

function getSecret (value = '') {
    return 'API_' + value.toUpperCase()
}

export default {
    oauth: {
        grand_type: 'password',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: '*'
    },
    default_storage: 'Cookies',
    oauth_type: 'Bearer'
}
