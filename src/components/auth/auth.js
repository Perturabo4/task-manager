import React from 'react';
import {connect} from 'react-redux';
import WithAuthService from '../hoc/with-auth-service';
import {compose} from '../../utils';
import {setAuthEmail, setAuthPass, registerNewUser} from '../../actions';
import Button from '../button';

import './auth.scss';

const Auth = ({email, pass, setAuthEmail, setAuthPass, sighnUp}) => {
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
                onClick={() => sighnUp(email, pass)}  
            />
        </form>
    )
}

const mapStateToProps = ({auth}) => auth;

const mapDispatchToProps = (dispatch, {AuthService}) => {
      return {
        setAuthEmail: (email) => dispatch(setAuthEmail(email)),
        setAuthPass: (pass) => dispatch(setAuthPass(pass)),
        sighnUp: registerNewUser(dispatch, AuthService)
      }
}

export default compose(
    WithAuthService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Auth); 