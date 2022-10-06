import style from './UserItem.module.css';

const UserItem = (props) => {
    return (
        <div className={style.useritem}>
            <table className={style.table}>
                <tr>
                    {props.children}
                </tr>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.mobile}</td>
                    <td className={style.actionBtns}>
                        <button className={style.editBtn}>Edit</button>
                        <button className={style.deleteBtn}>Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default UserItem;