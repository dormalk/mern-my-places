import React from 'react';

import UsersList from '../components/UsersList/UsersList';

const Users = () => {
    const USERS = [{id:'u1',name:'Dor',image:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', placesCount: 4}]
    return <UsersList items={USERS}/>
}

export default Users;