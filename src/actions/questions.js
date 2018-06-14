
import {_saveQuestionAnswer,_saveQuestion} from '../utils/_DATA'
import { ADD_QUESTIONS_TO_USER_action } from './users';

import {
    GET_QUESTIONS,
    VOTE_QUESTIONS,
    ADD_QUESTIONS
} from './actionType'



export function getquestions_action(questions){
    return {
        type:GET_QUESTIONS,
        questions:questions
    }
}//

export function voteQuestion(questionVote){
    return(dispatch) => {      
      return _saveQuestionAnswer(questionVote)
        .then(()=>{
          dispatch(votequestions_action(questionVote))                    
        })
    }
  }

  
export function votequestions_action(questionVote){
    return {
        type:VOTE_QUESTIONS,
        questionVote
    }
}//


export function addQuestions(question){
    return(dispatch) => {      
      return _saveQuestion(question)
        .then((question) =>{
          dispatch(addquestions_action(question))
          dispatch(ADD_QUESTIONS_TO_USER_action(question))
          //console.log("QUS:",question);          
        })
    }
  }//
export function addquestions_action(question){
    return {
        type:ADD_QUESTIONS,
        question
    }
}//






