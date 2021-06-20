import React from 'react';

import {UsersList} from '../components';
import User from '../../modals/User';

const Users = () => {
    const USERS : User[]  = [{id:'u1',name:'Dor',img:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', placeCount: 4}]
    return <UsersList items={USERS}/>
}

export default Users;