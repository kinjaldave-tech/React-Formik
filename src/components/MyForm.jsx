import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyForm.css"; // Custom CSS file

function MyForm() {
  const initialValues = {
    to: "",
    value: "",
    time: "",
  };

  const validationSchema = Yup.object().shape({
    to: Yup.string().required("To address is required"),
    value: Yup.number().required("Value is required"),
    time: Yup.date().required("Time is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="container-fluid my-form">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="my-form-heading">Send ETH</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="to">To</label>
              <input
                type="text"
                name="to"
                id="to"
                className={`form-control ${formik.touched.to && formik.errors.to ? "is-invalid" : ""}`}
                placeholder="Address"
                value={formik.values.to}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.to && formik.errors.to ? (
                <div className="invalid-feedback">{formik.errors.to}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="value">Value (ETH)</label>
              <input
                type="number"
                name="value"
                id="value"
                step="0.0001"
                className={`form-control ${formik.touched.value && formik.errors.value ? "is-invalid" : ""}`}
                placeholder="Amount in ether"
                value={formik.values.value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.value && formik.errors.value ? (
                <div className="invalid-feedback">{formik.errors.value}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="datetime-local"
                name="time"
                id="time"
                className={`form-control ${formik.touched.time && formik.errors.time ? "is-invalid" : ""}`}
                placeholder="Date & Time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.time && formik.errors.time ? (
                <div className="invalid-feedback">{formik.errors.time}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
