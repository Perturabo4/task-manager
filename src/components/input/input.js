import React from "react";
import "./input.scss";

const CheckType = ({ id, type, cls = [], onChange, value, name, err }) => {
  const classes = [...cls, err ? "invalid" : ""].join(" ");

  switch (type) {
    case "textarea":
      return (
        <textarea
          id={id}
          className={`materialize-textarea ${classes}`}
          onChange={onChange}
          name={name}
          value={value}
        ></textarea>
      );
    default:
      return (
        <input
          id={id}
          type="text"
          className={classes}
          onChange={onChange}
          name={name}
          value={value}
        />
      );
  }
};

const Input = (props) => {
  const { id, value, label, err } = props;
  return (
    <div className="input-field">
      <CheckType {...props} />
      <label htmlFor={id} className={value && "active"}>
        {label}
      </label>
      {err ? <span className="helper-text" data-error={err}></span> : null}
    </div>
  );
};

export default Input;
