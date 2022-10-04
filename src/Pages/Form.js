import { Fragment,useRef,useState } from 'react';
import style from './Form.module.css';

const Form = () => {
    const [usernameInput,setUsernameInput] = useState('');
    const [emailInput,setEmailInput] = useState('');
    const [phoneInput,setPhoneInput] = useState('');
    const [saveError,setSaveError] = useState(null);

    const usernameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const usernameHandler = (event) => {
        setUsernameInput(event.target.value);
    };

    const emailHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const phoneInputHandler = (event) => {
        setPhoneInput(event.target.value);
    };

    const saveHandler = () => {
        const usernameIsValid = usernameInput.trim().length >= 3;
        const emailIsValid = emailInput.includes('@');
        const phoneIsValid = (phoneInput.trim().length > 7 && phoneInput.trim().length < 15);
        setSaveError(!usernameIsValid || !emailIsValid || !phoneIsValid);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setUsernameInput("");
        setEmailInput("");
        setPhoneInput("");

        usernameRef.current.focus();

        const enteredUser = usernameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPhone = phoneRef.current.value;
    }

    return (
        <Fragment>
        <form onSubmit={submitHandler} className= {style.form}>
            <h2>Create User</h2>
            <label htmlFor="username">User Name:</label>
            <input
                id="username"
                placeholder="User name"
                type="text"
                ref={usernameRef}
                value={usernameInput}
                onChange={usernameHandler}
                />
                {saveError && <p className={style.errormes}>Please set a valid username</p>}
            <label htmlFor="email">Email User:</label>
            <input
                id="email"
                placeholder="Email address"
                type="email"
                ref={emailRef}
                value={emailInput}
                onChange={emailHandler}
                />
                {saveError && <p className={style.errormes}>Please set a valid email (includes @)</p>}
            <label htmlFor="phone">Mobile Phone:</label>
            <input 
                id="phone"
                placeholder="Mobile phone"
                type="number"
                ref={phoneRef}
                value={phoneInput}
                onChange={phoneInputHandler}
                />
                {saveError && <p className={style.errormes}>Please set a valid phone number</p>}
            <button type="submit" onClick={saveHandler}>Save</button>
            </form>
        </Fragment>
    );
};

export default Form;