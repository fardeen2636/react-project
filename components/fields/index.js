import React from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

function InputField({ field, form, label, ...props }) {
  const fieldName = field.Name;

  const isTouched = form.touched[fieldName];
  const error = form.errors[fieldName];

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        className={'form-control ${styles.inputFormControl} shadow-none'}
        isInvalid={isTouched && !!error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </>
  )
};
export default InputField;