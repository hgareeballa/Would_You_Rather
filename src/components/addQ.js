import React, {Component} from 'react'
import { connect } from 'react-redux'
//import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {addQuestions} from '../actions/questions'
import ReactLoading from "react-loading";   

class addQ extends Component{
  state ={
      optionOne: '',
      optionTwo: '',
      loading: false    
  }

  saveQuestion = (e) =>{
    e.preventDefault()
    this.setState({loading: true })
    document.getElementById("msgbox").style.display="none"   
             
    const {user} = this.props
    const {optionOne, optionTwo} = this.state
    //console.log("Auther:",user.id);
        
    this.props.dispatch(addQuestions({optionOneText: optionOne, optionTwoText: optionTwo, author: user.id}))
    .then(
        setTimeout(() => {
            this.setState({loading: false })
            document.getElementById("msgbox").style.display="block"            
            setTimeout(() => {
                this.props.history.push('/questions');
            }, 3000);
        }, 1000)
    )
    this.setState(()=>({
      optionOne: '',
      optionTwo: ''
    }))
  }//

  updateOptions =(e, option)=>{
    const text = e.target.value
    this.setState(()=>({
      [option]: text
    }))
  }

  render(){
    const {optionOne, optionTwo,loading} = this.state   
    const {user} = this.props 

    return(            
        <div>
        {user!==null?
        <div className="card border-primary">
          <form className='form-group' onSubmit={this.saveQuestion} >     
          <div className="card-header" align="center">           
              <h2 align="center"><span className="badge badge-primary badge-pill">Create New Question</span></h2>
        </div>
              <div className="card-body">
              <legend><p>Would You Rather</p></legend>              
                  <fieldset className="form-group">
                      <fieldset className="form-group">
                          <p>OPtion A:</p>
                          <input
                              value={optionOne}
                              onChange={(e) => this.updateOptions(e, 'optionOne')}
                          />                          
                          <p>Option B:</p>
                          <input
                              value={optionTwo}
                              onChange={(e) => this.updateOptions(e, 'optionTwo')}
                          />
                      </fieldset>
                      <fieldset>
                      <button
                              className='btn btn-primary'
                              disabled={optionOne === '' || optionTwo === ''}
                          >
                              Add Question
                            </button>
                            {"  "}
                            
                            <NavLink className='btn btn-secondary' to="/questions">
                            Cancel
                            </NavLink>              
                            
                      </fieldset>
                      <div align="center">{loading ? (<ReactLoading type="bars" color="blue" height={60} width={60} />) : ("")}  </div>
                        <div className="alert alert-dismissible alert-success col-4" id="msgbox"  style={{display:"none"}}>                            
                            <strong>Success!</strong> You successfully Added New Question. You will be redirected to homepage in 2's
                        </div>
                  </fieldset>
                </div>
            </form> 
            </div>
            :<button className="btn btn-danger">Please Login First!</button>
            }
        </div>
      )
  }
}

function mapStateToProps({activeUser}){
  return {
    user: activeUser    
  }
}

export default connect(mapStateToProps)(addQ)
