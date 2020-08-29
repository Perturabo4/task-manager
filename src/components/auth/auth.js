import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import WithAuthService from '../hoc/with-auth-service';
import {compose} from '../../utils';
import {setAuthEmail, setAuthPass, authUser} from '../../actions';
import Button from '../button';
import AuthError from '../auth-error';

import './auth.scss';

const Auth = ({email, pass, userId, setAuthEmail, setAuthPass, authUser, authError}) => {

   
    if(userId) {
        return <Redirect to={"/app"}/>
    }
    const buttonActive = !email || !pass ? 'disabled' : '';
    return (
    <div className="auth-background">
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
            
            {
                authError && <AuthError text={authError}/>
            }
            <Button
                cls={['red', buttonActive]}
                text={"Войти"}
                onClick={() => authUser(email, pass)}  
            />
            <Button 
                cls={['red', buttonActive]}
                text={"Зарегистрироваться"} 
                onClick={() => authUser(email, pass, true)}  
            />
        </form>
    </div>
    )
}

const mapStateToProps = ({auth}) => auth;

const mapDispatchToProps = (dispatch, {AuthService}) => {
      return {
        setAuthEmail: (email) => dispatch(setAuthEmail(email)),
        setAuthPass: (pass) => dispatch(setAuthPass(pass)),
        authUser: authUser(dispatch, AuthService)
      }
}

export default compose(
    WithAuthService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Auth); 