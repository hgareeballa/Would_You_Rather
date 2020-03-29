import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'

class leaderboard extends Component {
  state = {
    loading: false
  };

  render() {
    const { users, user } = this.props
    const { loading } = this.state
    return (
      user !== null ?
        <div align="center">
          <div className="card border-primary">
            <div className="card-header" align="center">
              <h2> <span className="badge badge-primary badge-pill align-items-center">Leader Board:</span> </h2>
            </div>
            <div className="card-body">
              {loading ? (<ReactLoading type="bars" color="blue" height={60} width={60} />) : (
                <ul className="list-group w-50 p-3">
                  {users.map(user => (
                    <div key={user.id}>
                      <li
                        key={user.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      //onClick={e => this.saveUser(users[user], e)}
                      >
                        <h2> <span className="badge badge-primary badge-pill btn">{user.name}</span> </h2>
                        <img src={user.avatarURL} className="img-rounded col-sm-2 btn" alt="notfound" />
                      </li>
                      <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Number of Questions answered
                                      <span className="badge badge-primary badge-pill">{user.answers}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Number of Questions Asked
                                      <span className="badge badge-primary badge-pill">{user.questions}</span>
                        </li>
                      </ul>
                    </div>
                  ))
                  }
                </ul>
              )}
            </div>
          </div>
        </div>
        : <button className="btn btn-danger">Please Login First!</button>
    );
  }
}//

function mapStateToProps({ users, activeUser }) {
  const ordered_user_list = Object.keys(users).map((user) => {
    return {
      id: user,
      name: users[user].name,
      avatarURL: users[user].avatarURL,
      questions: users[user].questions.length,
      answers: Object.keys(users[user].answers).length
    }
  }).sort((a, b) => {
    return (b.questions + b.answers) - (a.questions + a.answers)
  })

  return {
    users: ordered_user_list,
    user: activeUser
  }
}//

export default connect(mapStateToProps)(leaderboard);     
