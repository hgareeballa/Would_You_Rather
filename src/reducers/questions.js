import {GET_QUESTIONS,VOTE_QUESTIONS, ADD_QUESTIONS} from '../actions/actionType'

export default function questions (state = [], action){
    switch (action.type) {
        case GET_QUESTIONS:
        return {
            ...state,
            ...action.questions
          }
        case VOTE_QUESTIONS:
        const {authedUser, qid, answer} = action.questionVote
        let optionOne = state[qid].optionOne //
        let optionTwo = state[qid].optionTwo //        
            switch (answer) {
                case "optionOne":
                    optionOne = {
                        ...optionOne,
                        votes: [...optionOne.votes.concat([authedUser])]
                    }
                    optionTwo = {
                        ...optionTwo,
                        votes: [...optionTwo.votes.filter((authorId) => authorId !== authedUser)]
                    }
                    break;
                case "optionTwo":
                    optionOne = {
                        ...optionOne,
                        votes: [...optionOne.votes.filter((authorId) => authorId !== authedUser)]
                    }

                    optionTwo = {
                        ...optionTwo,
                        votes: [...optionTwo.votes.concat([authedUser])]
                    }
                    break;
                default:
                    break;                
            }
        const option={
          ...state[qid],
          optionOne,
          optionTwo
        }
        return {
          ...state,
          [qid]:option
        }     
        case ADD_QUESTIONS:
        return {
            ...state,
            [action.question.id]: action.question,            
        }
        default:
            return state
    }
}
