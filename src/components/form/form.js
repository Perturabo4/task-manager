import React from "react";

const Form = (props) => {
  return (
    <div className="auth-background">
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        {props.children}
      </form>
    </div>
  );
};

export default Form;
