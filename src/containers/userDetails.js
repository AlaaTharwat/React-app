import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUserDetails, clearDetails , DeleteUser } from '../actions';
import { bindActionCreators } from 'redux';

class UserDetails extends Component {
    constructor() {
        super()
        this.state = {
            OnClickDelete: false
        };
    }


    renderObject({ details }) {

        if (details)
            return (

                <div className="m-2 p-2 shadow text-center">

                    <div className="card" >
                        <div className="card-header">
                            {details.username}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{details.email}</li>
                            <li className="list-group-item">{details.phone}</li>
                            <li className="list-group-item">{details.website}</li>
                        </ul>
                    </div>

                    <button className="btn btn-danger m-2" onClick={this.deleteUser}>Delete</button>

                    <div>

                        {
                            console.log(this.state)
                        }

                        <div>
                            {this.state.OnClickDelete
                                ? <div>

                                    <div>Are you sure?</div>
                                    <button onClick = {this.yesButtonOnClick} className="m-1 btn btn-danger">Yes</button>
                                    <button onClick = {this.noButtonOnClick} className="m-1 btn btn-secondary">No</button>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            )
        return <h2 className="text-center">
            No Details
        </h2>
    }

    render() {
        return (
            <div>
                {this.renderObject(this.props)}
            </div>
        )
    }

    deleteUser = () => {
        this.setState({
            OnClickDelete: this.state.OnClickDelete === true ? false : true
        });
    }

    noButtonOnClick = () => {
        this.setState({
            OnClickDelete: this.state.OnClickDelete === true ? false : true
        });
    }

    yesButtonOnClick = () => {
        console.log(this.props.details.id)
        console.log(this.props.IsDeleted)
        this.props.DeleteUser(this.props.details.id)
        this.props.history.push(`/users`)
    }


   
    componentDidMount() {
        this.props.getUserDetails(this.props.match.params.id)
    }
    componentWillUnmount() {
        this.props.clearDetails()
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { details: state.users.details }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserDetails, clearDetails, DeleteUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)