import React from "react";

const Registration = ({
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
            id="email1"
            type="email"
            className={email.errorMessage && "invalid"}
            name="email"
            value={email.value}
            onChange={(e) => {}}
          />
          <label htmlFor="email">Email</label>
          <span className="helper-text" data-error={email.errorMessage}></span>
        </div>
        <div className="input-field">
          <input
            id="password1"
            type="password"
            className={pass.errorMessage && "invalid"}
            name="pass"
            value={pass.value}
            onChange={(e) => {}}
          />
          <label htmlFor="password">Пароль</label>
          <span className="helper-text" data-error={pass.errorMessage}></span>
        </div>

        {authError && <AuthError text={authError} />}
        <Button
          cls={["red"]}
          text={"Войти"}
          onClick={() => authUser(email.value, pass.value, true)}
        />
        <Button cls={["red"]} text={"Отмена"} onClick={() => {}} />
      </form>
    </div>
  );
};

export default Registration;
