import React from 'react';
import UsersList from '../containers/users-list'
import Search from '../containers/Search'




function Home(props) {
    return (
        <div>
            <Search/>
            <UsersList  history={props.history}/>
        </div>
    );
}

export default Home;

