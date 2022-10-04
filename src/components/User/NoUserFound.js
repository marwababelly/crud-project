import { Link } from 'react-router-dom';
import style from './NoUserFound.module.css';

const NoUserFound = () => {
    return (
        <div className={style.nouser}>
            <p>No Useres Found!</p>
            <Link className='btn' to='/no-useres'>
                Add User
            </Link>
        </div>
    );
};

export default NoUserFound;