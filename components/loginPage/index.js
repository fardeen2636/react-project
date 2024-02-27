import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css"
import * as yup from "yup";
import { Field, Formik } from "formik";
import InputField from "../fields";
import { useRouter } from "next/router";
import { loginService } from "@/service/authService";

const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    console.log("Email Entered:",values.email);
    console.log("Password Entered:",values.password);
    const res = await loginService({
      password: values.password,
      email: values.email,

    });

    if (res.success) {
      window.location = "/users";
      toast.success("Login Successful!");


      router.replace("/users");
    } else {
      toast.error("Login Unsuccessful!");

    }

  };
  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    // terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });



  return (
    <>
      <section>
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f7f7f7', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ maxWidth: '400px', width: '100%', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', backgroundColor: 'white' }}>
            <Formik
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
            >
              {({ handleSubmit, isSubmitting }) => {
                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <div
                      className={` ${styles.rounded} ${styles.pMd5} ${styles.pt4}`}
                    >
                      <div className="row my-2">
                        <div className="col-12">
                          <h1
                            className={`text-center ${styles.my2}`}                            >
                            <span>Spering</span>
                          </h1>
                          <h6
                            className={`text-center ${styles.textDark} ${styles.my2}`}
                          >
                            Welcome Back
                          </h6>
                        </div>
                        <div className="col-12 my-2">
                          <Field
                            name="email"
                            placeholder="Email Address"
                            label="Email"
                            component={InputField}

                          />
                        </div>
                        <div className="col-12 my-2">
                          <Field
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            component={InputField}
                          />
                        </div>

                        <div className="col-12 mx-auto my-2 mt-4">
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                            style={{ backgroundColor: '#1cbbb4', borderColor: '#1cbbb4' }}
                          >
                            {isSubmitting ? (
                              <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                </span>
                              </Spinner>
                            ) : (
                              "Login"
                            )}
                          </Button>
                          <ToastContainer />
                        </div>

                        <div className={`col-12 ${styles.mt4} d-flex justify-content-between`}>
                          <a href="./" style={{ color: '#1cbbb4' }}>
                            <i className="fa fa-arrow-left"></i> Back
                          </a>
                          <a href="./signup" style={{ color: '#1cbbb4' }}>
                            Signup <i className="fa fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>

          </div>
        </div>
      </section>
    </>
  )

};
export default Login;
