import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { voteQuestion } from '../actions/questions'
//import ReactLoading from "react-loading";          
import {Redirect} from 'react-router-dom'           
import '../css-circle/css/circle.css'               


class question_id extends Component {
   
    saveVote = (auser,q,answer, e) => {           
        if (Object.keys(auser.answers).includes(q.id)) {
            alert("You have already voted for this Question!")
        } else {                        
            document.getElementById(q.id+"_"+answer).style.backgroundColor = "#A9A9A9"
            this.setState({loading: true });
            this.props.dispatch(voteQuestion({authedUser:auser.id,qid:q.id,answer:answer}))
            .then(
            setTimeout(() => {
                this.setState({loading: false })
            }, 1000)
            )
        }                    
      };

    render() {
        const {question,auser,users} = this.props   
        let userCount = Object.keys(users).length    

        if(!question){
          return <Redirect to='/pagenotfound' />
        }

        const optionOne = question.optionOne.votes.includes(auser.id) ? 
        'btn badge badge-success badge-pill' : 
        'btn badge badge-primary badge-pill'
        const optionTwo = question.optionTwo.votes.includes(auser.id) ? 
        'btn badge badge-success badge-pill' : 
        'btn badge badge-primary badge-pill'              

        const classN1N = "c100 p"+question.optionOne.votes.length*10+" small"
        let x = (question.optionOne.votes.length/userCount).toFixed(2)*100
        const classN1P = "c100 p"+x+" small"
        
        const classN2N = "c100 p"+question.optionTwo.votes.length*10+" small"
        let x2 = (question.optionTwo.votes.length/userCount).toFixed(2)*100
        const classN2P = "c100 p"+x2+" small"
        
        return (   
            <Fragment>         
        <div className="card border-primary">
          <div className="card-header" align="center">           
              <h2 align="center"><span className="badge badge-primary badge-pill">Question Details</span></h2>
            </div>
        <div className="card-body">            
                <div className="card border-primary">
                    <div className="card-header badge badge-primary badge-pill align-items-center" >Would You Rather?</div>
                    <div className="card-body">                        
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <u><strong>{question.optionOne.text} </strong></u>
                            <span id={question.id+"_optionOne"}
                            //onClick={e => this.saveVote(auser,question,"optionOne", e)}
                            className={optionOne}
                            >Vote1</span>             
                            <ul className="list-group">                                                                                                                    
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                The # of User Voted:
                                <span className="badge badge-pill">
                                <div className={classN1N}>
                                            <span>[{question.optionOne.votes.length}]</span>
                                            <div className="slice">
                                                <div className="bar"></div>
                                                <div className="fill"></div>
                                            </div>
                                        </div>
                                </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                The % of User Voted:
                                <span className="badge badge-pill">
                                <div className={classN1P}>
                                            <span>[{x}]%</span>
                                            <div className="slice">
                                                <div className="bar"></div>
                                                <div className="fill"></div>
                                            </div>
                                        </div>
                                </span>
                                </li>
                        </ul>                                                                  
                        </li>                                        
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <u><strong>{question.optionTwo.text} </strong></u>
                            <span id={question.id+"_optionTwo"}
                            //onClick={e => this.saveVote(auser,question,"optionTwo", e)}
                            className={optionTwo}
                            >Vote2</span>  
                            <ul className="list-group">                                                                                                                    
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                The # of User Voted:
                                <span className="badge badge-pill">
                                <div className={classN2N}>
                                            <span>[{question.optionTwo.votes.length}]</span>
                                            <div className="slice">
                                                <div className="bar"></div>
                                                <div className="fill"></div>
                                            </div>
                                        </div>
                                </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                The % of User Voted:
                                <span className="badge badge-pill">
                                <div className={classN2P}>
                                            <span>[{x2}]%</span>
                                            <div className="slice">
                                                <div className="bar"></div>
                                                <div className="fill"></div>
                                            </div>
                                        </div>
                                </span>
                                </li>
                        </ul>                                                  
                        </li>                         
                    </ul>      
                        <p className="card-text"></p>                                                 
                         {/*<p className="card-text">QID:[{question.id}]</p>                        */}
                        <p className="card-text">QID:[{question.id}]</p>    
                        <p className="card-text">AUTHOR:[{question.author}]</p>    
                        <img src={users[question.author].avatarURL} className="img-circle" alt="Cinque Terre" width="20" height="20" />                                                        
                    </div>                      
                </div>     
            </div>
        </div>
        </Fragment>                   
        );
    }
}

function mapStateToProps({activeUser,questions,users},props) {
  const {id} = props.match.params
    return {        
        question: questions[id],
        auser:activeUser,
        users:users
    }
}//

export default connect(mapStateToProps)(question_id);
