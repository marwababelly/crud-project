import { Fragment } from 'react';
import style from './UserList.module.css';
import UserItem from './UserItem';

const UserList = () => {
    return (
        <Fragment>
            <table className={style.table}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </tr>
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    mobile={user.mobile}
                />
            </table>
        </Fragment>
    );
};

export default UserList;