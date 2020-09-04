import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WithAuthService from "../hoc/with-auth-service";
import { compose } from "../../utils";
import { setAuthInputValue, authUser } from "../../actions";
import Form from "../form";
import Input from "../input";
import Button from "../button";
import AuthError from "../auth-error";

import "./auth.scss";

const Auth = (props) => {
  const { email, pass, userId, setAuthInputValue, authUser, authError } = props;
  if (userId) {
    return <Redirect to={"/app"} />;
  }

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
      {props.children}
      {authError && <AuthError text={authError} />}
      <Button
        cls={["red"]}
        text={"Войти"}
        onClick={() => authUser(email.value, pass.value)}
      />
      {/* <Button cls={["red"]} text={"Зарегистрироваться"} onClick={() => {}} /> */}
      <Link to={`/registration`} className="btn red">
        Зарегистрироваться
      </Link>
    </Form>
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
