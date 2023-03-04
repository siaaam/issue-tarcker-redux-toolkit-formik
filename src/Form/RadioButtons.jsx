import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const RadioButtons = (props) => {
  const { name, label, options, ...rest } = props;
  return (
    <div className="mb-4">
      <label className="block mb-2 text-base font-medium text-gray-900">
        {label}
      </label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  className="mr-1"
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label className="mr-3" htmlFor={option.value}>
                  {option.key}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
