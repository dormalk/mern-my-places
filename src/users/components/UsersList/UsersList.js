import React from 'react';

import UserItem from '../UserItem/UserItem';

const UsersList = ({items = []}) => {
    if(items.length == 0) {
        return <div className="center">No users found!</div>
    } else {
        return <ul className="users-list">
            {
                items.map(user => 
                    <UserItem   key={user.id}
                                id={user.id}
                                image={user.image}
                                name={user.name}
                                placesCount={user.placesCount}/>
                )
            }
        </ul>
    }
}

export default UsersList;