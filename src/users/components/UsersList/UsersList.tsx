import React from 'react';

import UserItem from '../UserItem/UserItem';
import User from '../../../modals/User';
import { Card } from '../../../shared/components/UIElements';
import './UsersList.css'

class UserListProps{
    items: User[];

    constructor(){
        this.items = [];
    }
}

const UsersList = (props : UserListProps) => {
    if(props.items.length === 0) {
        return <div className="center">
            <Card>
                No users found!
            </Card>
        </div>
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