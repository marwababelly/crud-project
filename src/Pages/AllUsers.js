import { useState, useEffect } from 'react';
import UserList from '../components/User/UserList';
import style from './AllUsers.module.css';
import { getAllusers } from '../api/api';
import useHttp from '../hooks/use-http';
import NotFound from './NotFound';

const Allusers = () => {
    const [usersList,setUsersList] = useState([]);
    const { sendRequest,status,data: loadedUsers,error } = useHttp(
        getAllusers,
        true
    );

    useEffect(() => {
        sendRequest();
    },[sendRequest]);

    if (error) {
        return <p>{error}</p>
    }

    if (status === 'completed' && (!loadedUsers || loadedUsers.length === 0)) {
        return <NotFound />;
    }

    const deleteUserHandler = (userId) => {
        setUsersList((prevUsers) => {
            const updatedUsers = prevUsers.filter((user) => user.id !== userId);
            return updatedUsers;
        });
    };

    return (
        <section className={style.list}>
            <UserList item={usersList} onDeleteUser ={deleteUserHandler}/>
        </section>
    );
};

export default Allusers;