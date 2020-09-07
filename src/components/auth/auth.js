import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import WithAuthService from "../hoc/with-auth-service";
import { compose } from "../../utils";
import { setAuthInputValue, setRegistration, authUser } from "../../actions";
import Form from "../form";
import Input from "../input";
import Button from "../button";
import AuthError from "../auth-error";

import "./auth.scss";

const Auth = (props) => {
  const {
    email,
    pass,
    confirmPass,
    isRegistrationNewUser,
    userId,
    setAuthInputValue,
    setRegistration,
    authUser,
    authError,
  } = props;

  if (userId) {
    return <Redirect to={"/app"} />;
  }

  const hasFormError =
    email.errorMessage || pass.errorMessage || confirmPass.errorMessage;
  const hasFormValues = !email.value || !pass.value || !confirmPass.value;

  return (
    <Form>
      <Input
        id="email"
        type="email"
        className={email.errorMessage && "invalid"}
        name="email"
        label="E-mail"
        value={email.value}
        err={email.errorMessage}
        onChange={(e) =>
          setAuthInputValue({ name: e.target.name, value: e.target.value })
        }
      />
      <Input
        id="password"
        type="password"
        className={pass.errorMessage && "invalid"}
        name="pass"
        label="Пароль"
        value={pass.value}
        err={pass.errorMessage}
        onChange={(e) =>
          setAuthInputValue({ name: e.target.name, value: e.target.value })
        }
      />
      {isRegistrationNewUser && (
        <Input
          id="confirmPassword"
          type="password"
          className={confirmPass.errorMessage && "invalid"}
          name="confirmPass"
          label="Подтвердите пароль"
          value={confirmPass.value}
          err={confirmPass.errorMessage}
          disabled={!pass.value || pass.errorMessage}
          onChange={(e) =>
            setAuthInputValue({ name: e.target.name, value: e.target.value })
          }
        />
      )}
      {authError && <AuthError text={authError} />}
      {isRegistrationNewUser ? (
        <>
          <Button
            cls={["red"]}
            text={"Отмена"}
            onClick={() => setRegistration(false)}
          />
          <Button
            cls={["red", hasFormError || hasFormValues ? "disabled" : ""]}
            text={"Готово"}
            onClick={() => authUser(email.value, pass.value, true)}
          />
        </>
      ) : (
        <>
          <Button
            cls={["red"]}
            text={"Войти"}
            onClick={() => authUser(email.value, pass.value)}
          />
          <Button
            cls={["red"]}
            text={"Зарегистрироваться"}
            onClick={() => setRegistration(true)}
          />
        </>
      )}
    </Form>
  );
};

const mapStateToProps = ({ auth }) => auth;

const mapDispatchToProps = (dispatch, { AuthService }) => {
  return {
    setAuthInputValue: (obj) => dispatch(setAuthInputValue(obj)),
    authUser: authUser(dispatch, AuthService),
    setRegistration: (bool) => dispatch(setRegistration(bool)),
  };
};

export default compose(
  WithAuthService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Auth);
