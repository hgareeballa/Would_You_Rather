import React, { Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../navcss.css'

class nav extends Component {
    render() {
        const {activeUser} = this.props
        return (

          <div align="center">
            <h2> <span className="badge badge-primary badge-pill align-items-center">Would You Rather?</span> </h2>  
            {activeUser === null ? (
            <h3> <span className="badge-pill btn btn-outline-primary">
            <NavLink to="/login">Login</NavLink>
            </span> </h3>                              
              ) : (
            <h3> <span className="badge-pill btn btn-outline-primary">
            <NavLink to="/logout">Logout</NavLink></span> 
            </h3>  
            
                )}
            <h4>{activeUser === null ? "" : activeUser.name} {activeUser === null ? "" : <img src={activeUser.avatarURL} className="img-circle" alt="Cinque Terre" width="20" height="20" />} </h4>            
            <ul className="nav" align="center">
              <li><NavLink to="/questions"  activeStyle={{fontWeight: 'bold'}}> Questions</NavLink></li>
              <li><NavLink to="/add"> Add Questions</NavLink></li>     
              <li><NavLink to="/leaderboard"> Leadr Board</NavLink></li>                                                                   
            </ul>
          </div>
        );
    }
}//

function mapStateToProps({activeUser}) {
    return {
        activeUser:activeUser===undefined?null:activeUser
    };
}
export default connect(mapStateToProps)(nav);


