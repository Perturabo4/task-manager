import React from 'react';
import {connect} from 'react-redux';
import {setAuthEmail, setAuthPass} from '../../actions';
import Button from '../button';

import './auth.scss';

const Auth = ({email, pass, setAuthEmail, setAuthPass}) => {
    const buttonActive = !email || !pass ? 'disabled' : '';
    return (
        <form 
            className="auth-form"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="input-field">
                <input 
                    id="email"
                    type="email"
                    className="validate"
                    value={email}
                    onChange={(e) => setAuthEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <span className="helper-text" data-error="Неверный e-mail"></span>
            </div>
            <div className="input-field">
                <input 
                    id="password"
                    type="password"
                    className="validate"
                    onChange={(e) => setAuthPass(e.target.value)}
                />
                <label htmlFor="password">Пароль</label>
                <span className="helper-text" data-error="wrong"></span>
            </div>
            <Button
                cls={['red', buttonActive]}
                text={"Войти"}    
            />
            <Button 
                cls={['red', buttonActive]}
                text={"Зарегистрироваться"} 
            />
        </form>
    )
}

const mapStateToProps = ({auth}) => auth;

const mapDispatchToProps = {
        setAuthEmail,
        setAuthPass
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth); 