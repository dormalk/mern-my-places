import React from 'react';

import UserItem from '../UserItem/UserItem';
import User from '../../../modals/User';
import './UsersList.css'

class UserListProps{
    items: User[];

    constructor(){
        this.items = [];
    }
}

const UsersList = (props : UserListProps) => {
    if(props.items.length === 0) {
        return <div className="center">No users found!</div>
    } else {
        return <ul className="users-list">
            {
                props.items.map((user : User) => 
                    <UserItem   key={user.id}
                                id={user.id}
                                img={user.img}
                                name={user.name}
                                placeCount={user.placeCount}/>
                )
            }
        </ul>
    }
}

export default UsersList;