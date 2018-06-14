import {
    SET_USER,
    GET_USER,
    ADD_VOTE_TO_USER
} from '../actions/actionType'

export default function activeUser (state = null, action){
    switch (action.type) {      
        case SET_USER:            
            return action.activeUser    
        case GET_USER:
            return action.activeUser
        case ADD_VOTE_TO_USER:   
            const {qid, answer } = action.questionAnswer
            const newanswer = {[qid]:answer}
            return {
                ...state,
                MEME:newanswer
            }
        default:
            return state
    }
}//
