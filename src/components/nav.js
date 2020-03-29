import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import '../navcss.css'

class nav extends Component {
  render() {
    const { activeUser } = this.props
    return (

      <div align="center">
        <h2> <span className="badge badge-primary badge-pill align-items-center">Would You Rather v1.0 ?</span> </h2>

        {activeUser === null ? <LoginOut value="login" /> : <LoginOut value="logout" />}

        <h4>{activeUser === null ? "" : activeUser.name} {activeUser === null ? "" : <img src={activeUser.avatarURL} className="img-circle" alt="Cinque Terre" width="20" height="20" />} </h4>
        <ul className="nav" align="center">
          <li><Link to="/questions" activeStyle={{ fontWeight: 'bold' }}> Questions</Link></li>
          <li><Link to="/add"> Add Questions</Link></li>
          <li><Link to="/leaderboard"> Leadr Board</Link></li>
        </ul>
      </div >
    );
  }
}//

function mapStateToProps({ activeUser }) {
  return {
    activeUser: activeUser === undefined ? null : activeUser
  };
}
export default connect(mapStateToProps)(nav);

function LoginOut(props) {
  const { value } = props;
  return (
    <div>
      <h3>
        <Link to={{ pathname: value }}><span className="badge-pill btn btn-outline-primary">{value}</span></Link>
      </h3>
    </div >
  )

}


