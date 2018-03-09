import config_data from './fireb_conf.json'

import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp(config_data)


export {firebaseApp}
