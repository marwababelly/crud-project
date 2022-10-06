import { Fragment,useRef,useState } from 'react';
// import { Prompt } from 'react-router-dom';
import style from './Form.module.css';

const Form = (props) => {
    const [usernameInput,setUsernameInput] = useState('');
    const [emailInput,setEmailInput] = useState('');
    const [mobileInput,setPhoneInput] = useState('');
    const [saveError,setSaveError] = useState(null);
    const [isEntering,setIsEntering] = useState(false);

    const usernameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    const usernameHandler = (event) => {
        setUsernameInput(event.target.value);
    };

    const emailHandler = (event) => {
        setEmailInput(event.target.value);
    };

    const MobileInputHandler = (event) => {
        setPhoneInput(event.target.value);
    };

    const saveHandler = () => {
        const usernameIsValid = usernameInput.trim().length >= 3;
        const emailIsValid = emailInput.includes('@');
        const phoneIsValid = (mobileInput.trim().length > 7 && mobileInput.trim().length < 15);
        setSaveError(!usernameIsValid || !emailIsValid || !phoneIsValid);
        setIsEntering(false);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredUser = usernameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredMobile = mobileRef.current.value;
        
        props.onAddUser({name: enteredUser, email: enteredEmail, mobile: enteredMobile});


        usernameRef.current.focus();
    }

    const formFocusHandler = () => {
        setIsEntering(true);
    };

    return (
        <Fragment>
            {/* <Prompt
                when={isEntering}
                message={(Location) => 
                    'Are you sure you want to leave?! All your entered data will be lost!'
                }
            /> */}
            <form
                onFocus={formFocusHandler}
                className={style.form}
                onSubmit={submitFormHandler}
            >
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
            <label htmlFor="mobile">Mobile Phone:</label>
            <input 
                id="mobile"
                placeholder="Mobile phone"
                type="number"
                ref={mobileRef}
                value={mobileInput}
                onChange={MobileInputHandler}
                />
                {saveError && <p className={style.errormes}>Please set a valid phone number</p>}
            <button type="submit" onClick={saveHandler}>Save</button>
            </form>
        </Fragment>
    );
};

export default Form;