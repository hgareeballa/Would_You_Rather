import {combineReducers} from 'redux'
import users from './users'
import activeUser from './activeuser'
import questions from './questions'

export default combineReducers({
    users,
    questions,
    activeUser
})