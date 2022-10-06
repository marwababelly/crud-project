import UserList from '../components/User/UserList';
import style from './AllUseres.module.css';

const AllUseres = () => {
    return (
        <section className={style.list}>
            <UserList />
        </section>
    );
};

export default AllUseres;