import {
    GET_USER,
    GET_USERS,
    SET_USER,
    ADD_QUESTIONS_TO_USER,
    ADD_VOTE_TO_USER
} from './actionType'

export function getusers_action(users){
    return {
        type:GET_USERS,
        users:users
    }
}//


export function setUser_action(activeUser){
    return {
        type:SET_USER,
        activeUser:activeUser
    }
}//

export function getuser_action(activeUser){
    return {
        type:GET_USER,
        activeUser:activeUser
    }
}//

export function ADD_QUESTIONS_TO_USER_action(question){
    return {
        type:ADD_QUESTIONS_TO_USER,
        question
    }
}

export function ADD_VOTE_TO_USER_action(questionAnswer){
    return {
        type:ADD_VOTE_TO_USER,
        questionAnswer     
    }
}


