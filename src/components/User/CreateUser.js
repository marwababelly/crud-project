import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../api/api";
import useHttp from "../../hooks/use-http";
import Form from "../../Pages/Form";
import style from './CreateUser.module.css';

const CreateUser = () => {
    const { sendRequest,status } = useHttp(addUser);
    const navigate = useNavigate();

    const addUserHandler = (userData) => {
        sendRequest(userData);
        navigate('/');
        // if (status === 'completed') {
        // }
    };
    
    return (
        <Fragment>
            <div className={style.main}>
                <div className={style.image}>
                    <img src='../photo.webp' />
                </div>
                <Form isLoading={status === 'pending'} onAddUser={addUserHandler} />
            </div>
        </Fragment>
    );
};

export default CreateUser;