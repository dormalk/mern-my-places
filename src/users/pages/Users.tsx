import React from 'react';

import {UsersList} from '../components';
import User from '../../modals/User';

const Users = () => {
    const USERS : User[]  = [
        {id:'u1',name:'Dor',img:'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg', placeCount: 4},
        {id:'u2',name:'Max',img:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', placeCount: 2}
    ]
    return <UsersList items={USERS}/>
}

export default Users;