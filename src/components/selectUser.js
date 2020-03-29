import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setUser_action } from '../actions/users'
//import { getQuestions } from '../actions/questions'
import { handleInitialData } from '../actions/shared'
import ReactLoading from "react-loading";

class selectUser extends Component {
    state = {
        loading: true
    };
    componentDidMount() {
        this.props.dispatch(handleInitialData()).then(x => {
            this.setState({ loading: false });
            this.props.dispatch(setUser_action(null))
        })
    }//componentDid

    saveUser = (user, e) => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.props.dispatch(setUser_action(user));
            this.setState({ loading: false });
            this.props.history.push('/questions');
        }, 0);

    };

    render() {
        const { users } = this.props;
        const { loading } = this.state;
        return (
            <div align="center">
                <div className="card border-primary">
                    <div className="card-header" align="center">
                        <h2> <span className="badge badge-primary badge-pill align-items-center">SELECT USER TO LOGIN:</span> </h2>
                    </div>
                    <div className="card-body">
                        {loading ? (<ReactLoading type="bars" color="blue" height={60} width={60} />) : (
                            <ul className="list-group w-50 p-3">
                                {Object.keys(users).map(user => (
                                    <li
                                        key={users[user].id}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                        onClick={e => this.saveUser(users[user], e)}
                                    >
                                        <h2> <span className="badge badge-primary badge-pill btn">{users[user].name}</span> </h2>
                                        <img src={users[user].avatarURL} className="img-rounded col-sm-2 btn" alt="notfound" />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );//return
    }
}//Componenet 

function mapStateToProps({ users, questions }) {
    return {
        users: users,
        questions: questions
    }
}//

export default connect(mapStateToProps)(selectUser);
