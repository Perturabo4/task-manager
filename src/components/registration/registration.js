import React from "react";
import Auth from "../auth";
import Input from "../input";

const Registration = () => {
  return (
    <Auth>
      {/* <Input
        id="password1"
        type="password"
        className={pass.errorMessage && "invalid"}
        name="confirmPass"
        label="Подтвердите пароль"
        value={confirmPass.value}
        err={confirmPass.errorMessage}
        onChange={(e) =>
          setAuthInputValue({ name: e.target.name, value: e.target.value })
        }
      /> */}
    </Auth>
  );
};

export default Registration;
