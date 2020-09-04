import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WithAuthService from "../hoc/with-auth-service";
import { compose } from "../../utils";
import { setAuthInputValue, authUser } from "../../actions";
import Button from "../button";
import AuthError from "../auth-error";

import "./auth.scss";

const Auth = ({
  email,
  pass,
  userId,
  setAuthInputValue,
  authUser,
  authError,
}) => {
  if (userId) {
    return <Redirect to={"/app"} />;
  }

  return (
    <div className="auth-background">
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-field">
          <input
            id="email"
            type="email"
            className={email.errorMessage && "invalid"}
            name="email"
            value={email.value}
            onChange={(e) =>
              setAuthInputValue({ name: e.target.name, value: e.target.value })
            }
          />
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error={email.errorMessage}></span>
        </div>
        <div className="input-field">
          <input
            id="password"
            type="password"
            className={pass.errorMessage && "invalid"}
            name="pass"
            value={pass.value}
            onChange={(e) =>
              setAuthInputValue({ name: e.target.name, value: e.target.value })
            }
          />
          <label htmlFor="password">Пароль</label>
          <span className="helper-text" data-error={pass.errorMessage}></span>
        </div>

        {authError && <AuthError text={authError} />}
        <Button
          cls={["red"]}
          text={"Войти"}
          onClick={() => authUser(email.value, pass.value)}
        />
        <Button
          cls={["red"]}
          text={"Зарегистрироваться"}
          onClick={() => authUser(email, pass, true)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ auth }) => auth;

const mapDispatchToProps = (dispatch, { AuthService }) => {
  return {
    setAuthInputValue: (obj) => dispatch(setAuthInputValue(obj)),
    authUser: authUser(dispatch, AuthService),
  };
};

export default compose(
  WithAuthService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Auth);
