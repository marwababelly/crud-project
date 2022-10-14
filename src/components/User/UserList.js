import { Fragment, useState } from 'react';
import style from './UserList.module.css';
import UserItem from './UserItem';

const UserList = (props) => {
    const [users,setUser] = useState([]);

    return (
        <Fragment>
            <table className={style.tab}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
            {users && users.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    mobile={user.mobile}
                    onDelete={props.onDeleteUser}
                />
            ))};
        </Fragment>
    );
};

export default UserList;