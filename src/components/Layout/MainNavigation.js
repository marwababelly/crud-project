import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import style from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <Fragment>
                <header className={style.header}>
                <div className={style.logo}>CRUD</div>
                <nav className={style.nav}>
                    <ul>
                        <li>
                            <NavLink to="/form" activeClassName={style.active}>
                                Create User
                            </NavLink>  
                        </li>
                        <li>
                            <NavLink to="/list" activeClassName={style.active}>
                                List User
                            </NavLink>  
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default MainNavigation;
