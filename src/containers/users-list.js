import React from 'react'
import UserItem from '../components/userItem'
import {connect} from 'react-redux';



const UsersList = (props)=>{
    console.log(props)
    const renderList  = ({users})=>{
        if(users)
            return users.map((user)=>{
                 return <UserItem  history={props.history} key={user.id} user={user}/>
            })
        return <h1 className="text-center m-4"></h1>
    }
    return (
        <div>
            {renderList(props)}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        users:state.users.list
    }
}
export default connect(mapStateToProps)(UsersList)