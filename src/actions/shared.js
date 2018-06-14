import {getusers_action} from '../actions/users'
import {getquestions_action} from '../actions/questions'


import {
    _getUsers,
    _getQuestions,
  } from '../utils/_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }//

  export function handleInitialData () {
    return (dispatch) => {      
      return getInitialData()
        .then(({ users, questions }) => {
          dispatch(getusers_action(users))
          dispatch(getquestions_action(questions))          
        })
    }
  }
  


  