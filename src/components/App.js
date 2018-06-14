
import React, { Component ,Fragment} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
//import {connect } from 'react-redux'


import SelectUser from './selectUser'
import Nav from './nav'
import questions from './questions'
import addQ from './addQ'
import leaderboard from './leaderboard'
import pagenotfound from './pagenotfound'
import question_id from './question_id'

class App extends Component {
  render() {        
    return (      
      <Router>
      <Fragment>                
        <div className='container'>                          
                <Nav />
                <Switch>
                <Route path='/' exact component={SelectUser} />
                <Route path='/questions' exact component={questions} /> 
                <Route path='/questions/:id' component={question_id} />
                <Route path='/add' exact component={addQ} /> 
                <Route path='/leaderboard' exact component={leaderboard} /> 
                <Route path='/login' exact component={SelectUser} />            
                <Route path='/logout' exact component={SelectUser} />    
                <Route component={pagenotfound}/>}
                </Switch>
        </div>
      </Fragment>
    </Router>
    );
  }
}

export default App;
