import { Link } from 'react-router-dom';
import style from './UserItem.module.css';

const UserItem = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <div className={style.useritem}>
            <table className={style.table}>
                <thead>
                    <tr>
                        {props.children}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.mobile}</td>
                        <td className={style.actionBtns}>
                            <Link className={style.editBtn} to={`/${props.id}/edit`}>Edit</Link>
                            <button className={style.deleteBtn} onClick={deleteHandler}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserItem;