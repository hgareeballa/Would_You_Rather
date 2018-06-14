import React, { Component } from 'react';
import {connect} from 'react-redux'
import { voteQuestion } from '../actions/questions'
import { setUser_action } from '../actions/users'
import ReactLoading from "react-loading";         
import { withRouter } from "react-router-dom";
import {handleInitialData} from '../actions/shared'


class question extends Component {
    state = {
        loading: false          
      };
    saveVote = (auser,q,answer, e) => {               
        if (Object.keys(auser.answers).includes(q.id)) {
            alert("You have already voted for this Question!")
        } else {                                                                             
            document.getElementById(q.id+"_"+answer).style.backgroundColor = "#A9A9A9"
            this.setState({loading: true });            

            //this.props.dispatch(ADD_VOTE_TO_USER_action({qid:q.id,answer:answer}))

            this.props.dispatch(voteQuestion({authedUser:auser.id,qid:q.id,answer:answer}))                                
            .then(                                
            setTimeout(() => {
             this.props.dispatch(handleInitialData()).then(x=>{        
                this.setState({loading: false })
                this.props.dispatch(setUser_action(this.props.users[auser.id])); 
                this.props.history.push("/questions/"+q.id)            
            })

            }, 1000)
            )
        }                            
      };

    showdetails = (id,e) =>{        
        this.props.history.push("/questions/"+id)  
    }//

    render() {
        const {question,auser,users} = this.props       
        const { loading } = this.state   
        
        const optionOne = question.optionOne.votes.includes(auser.id) ? 
        'btn badge badge-success badge-pill' : 
        'btn badge badge-primary badge-pill'
        const optionTwo = question.optionTwo.votes.includes(auser.id) ? 
        'btn badge badge-success badge-pill' : 
        'btn badge badge-primary badge-pill'              

        return (            
                <div className="card border-primary">
                    <div className="card-header badge badge-primary badge-pill align-items-center" >Would Your Rather?</div>
                    <div className="card-body">                        
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {question.optionOne.text}
                            <span id={question.id+"_optionOne"} 
                            className={optionOne}
                            onClick={e => this.saveVote(auser,question,"optionOne", e)}                            
                            >Vote1</span>                            
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {question.optionTwo.text}
                            <span id={question.id+"_optionTwo"} 
                            className={optionTwo}
                            onClick={e => this.saveVote(auser,question,"optionTwo", e)}                            
                            >Vote2</span>                            
                        </li>
                    </ul>                                                                      
                        <p className="card-text"></p>                                                
                        <p className="card-text">QID:[{question.id}]</p>                        
                        <p className="card-text">AUTHOR:[{question.author}]</p>      
                        <img src={users[question.author].avatarURL} className="img-circle" alt="Cinque Terre" width="20" height="20" />                           
                        
                    <div>
                        <br></br>
                    <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={e => this.showdetails(question.id, e)}
                    >Show Details</button>
                    </div>
                    
                    </div>  
                    <div align="center">{loading ? (<ReactLoading type="bars" color="blue" height={60} width={60} />) : ("")}  </div>
                </div>                           
        );
    }
}

function mapStateToProps({activeUser,questions,users},{qid}) {
    return {        
        question: questions[qid],
        auser:activeUser        ,
        users:users
    }
}//

export default withRouter(connect(mapStateToProps)(question));
