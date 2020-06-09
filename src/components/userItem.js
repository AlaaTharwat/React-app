import React from 'react'

const UserItem = ({ user, history }) => {
    return (
        <div className="border text-center card shadow p-2 m-2">
            <h3 onClick={() => {
                history.push(`/users/${user.id}`)
            }}
            >{user.name}</h3>
            {/* <img 
             className="w-50 rounded-circle" src={`/images/${car.image}`} /> */}
        </div>
    )
}
export default UserItem