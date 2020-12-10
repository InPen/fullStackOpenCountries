import React from "react";

const InputField = ({ htmlFor, label, type, value, onChange }) => (
  <>
    <label htmlFor={htmlFor}>
      {label}
    </label>
    <input
      type={type}
      id={htmlFor}
      value={value}
      onChange={onChange}
    />
  </>
);

export default InputField
