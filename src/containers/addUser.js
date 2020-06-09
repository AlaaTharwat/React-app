import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers, addUser } from '../actions';

import { } from '../actions';
import { bindActionCreators } from 'redux';



class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            formValid: false
        };
    }


    componentDidMount() {
        console.log("Here didMount")
    }


    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })

        this.setState({
            formValid: true
        });
    }


    adduser = (e) => {
        e.preventDefault();
        let user = { email: this.state.email, name: this.state.name }
        addUser(user)
        this.props.history.push(`/users`)
    }

    render() {
        return (
            <div className="header">
                <div className="col-6 offset-3 ">
                    <h3 className="text-center">AddUser</h3>
                    <form className="form">
                        <div className="form-group">
                            <input type="name" className="form-control" onChange={this.handleChangeName} value={this.state.name} placeholder="Enter name" />
                        </div>

                        <div className="form-group">
                            <input type="username" className="form-control" placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <input type="email" className="form-control" onChange={this.handleChangeEmail} value={this.state.email} placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <input type="phone" className="form-control" placeholder="Enter phone" />
                        </div>

                        <div className="form-group">
                            <input type="website" className="form-control" placeholder="Enter website" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={this.adduser}>Submit</button>

                    </form>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addUser }, dispatch)
}


export default connect(null, mapDispatchToProps)(AddUser);