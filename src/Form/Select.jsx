import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {label}
      </label>
      <Field
        as="select"
        className="border border-[#e0e0e0] px-3 py-3 rounded-md w-[200px]"
        name={name}
        id={name}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
