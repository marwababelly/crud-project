import { Fragment } from "react";
import Form from "../../Pages/Form";
import style from './CreateUser.module.css';

const CreateUser = () => {
    return (
        <Fragment>
                <div className={style.main}>
                <div className={style.image}>
                        <img src='../photo.webp' />
                </div>
                <Form />
            </div>
        </Fragment>
    );
};

export default CreateUser;