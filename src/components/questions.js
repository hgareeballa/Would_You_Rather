import React, { Component } from 'react';
import {connect} from 'react-redux'
import Question from './question'
//import {Link} from 'react-router-dom'



class questions extends Component {
    state = {
        loading: false,
        au_val: false      
      };
    showbtn = (val,e) =>{        
        document.getElementById("b"+val).className="btn badge badge-pill btn-primary"
        if (val==="aq") {                        
            document.getElementById("bunaq").className="btn badge badge-pill btn-secondary"
            this.setState({au_val:true})
        }else{            
            this.setState({au_val:false})
            document.getElementById("baq").className="btn badge badge-pill btn-secondary"    
        }                       
    }//

 
    
    render() {
        const {questions, user} = this.props
        const {au_val} = this.state                   
        return (                        
            <div>
                {user!==null?
                <div className="card border-primary">
                    <div className="card-header" align="center">
                  <h3> 
                  <span id="bunaq" className="btn badge badge-pill btn-primary"
                    onClick={e => this.showbtn("unaq", e)}
                    >UN-Answered Questions</span>
                    
                    <span id="baq" className="btn badge badge-pill"
                    onClick={e => this.showbtn("aq", e)}
                    >Answered Questions</span>                    
                </h3>
                    </div>                
                    <div className="card-body">
                        <div className="container-fluid" id="aq">
                            <div className="row">
                                {Object.keys(questions).sort((a, b)=>{return questions[b].timestamp - questions[a].timestamp})
                                .map((q) => (                                    
                                (Object.keys(user.answers).includes(questions[q].id)
                                ?                                        
                                  au_val?
                                  //questions[q].author===user.id?
                                  <div className="col-md-4" key={questions[q].id}                                   
                                  >
                                            <Question qid={questions[q].id} />                                           
                                  </div>
                                  //:""                                  
                                        :""
                                :                                    
                                  au_val?"":
                                  //questions[q].author===user.id?                                  
                                  <div className="col-md-4" key={questions[q].id}                                  
                                  >
                                            <Question qid={questions[q].id} />   
                                                                     
                                  </div>                                 
                                  
                                  //:""                                    
                                )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>       
                :<button className="btn btn-danger">Please Login First!</button>}                                         
            </div>
        );
    }
}//

function mapStateToProps({ questions,activeUser }) { 
    return {        
        questions: questions,
        user:activeUser 
    }
}//
export default connect(mapStateToProps)(questions);