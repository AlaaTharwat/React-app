import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getUsers} from '../actions';
import { bindActionCreators } from 'redux';


class Search extends Component {
    constructor() {
        super()
        this.state={
            username:''
        }
    }

    usernameChanged = (e)=>{

        this.setState({username:e.target.value})
        this.props.getUsers(e.target.value)
    }

    componentDidMount (){
        console.log("Here didMount")
        this.props.getUsers("");
    }

    render() {
        return (
            <form className="border-bottom m-2 p-2">
                <div className="form-group">
                    <input type="text" placeholder="search by username" 
                    onChange={this.usernameChanged}
                    className="form-control rounded-pill" />
                </div>
                {/* <div className="form-group text-center">
                    <button className="btn btn-dark w-25"
                    onClick={this.search}>Search</button>
                </div> */}
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getUsers},dispatch)
}
export default connect(null,mapDispatchToProps)(Search);