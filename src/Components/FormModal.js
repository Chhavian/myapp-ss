import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = (error) => {
    return <div className="invalid-feedback">{error}</div>;
};

const validateEmail = (value) => {
    let error;
    if (!value) {
        error = required;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
};

const validateMobileNumber = (value) => {
    let error;
    if (value.length > 12) {
        error = maxLength;
    }
    return error;
};

function FormComp(props) {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    mobilenumber: "",
                    leads: "",
                    leadsCRM: "",
                    CRM: "",
                    agents: "",
                    sources: [],
                    publicity: [],
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched }) => (
                    <div style={{ justifyContent: "center", paddingBottom: "2rem" }}>
                        <div className="col-sm-12" style={{ paddingLeft: "3.5rem", paddingBottom: "2rem" }}>
                            <span style={{ fontWeight: "800", fontSize: "16px" }}>Plan Selected: </span>Qualified {props.title}
                        </div>
                        <div className="container">
                            <Form>
                                <div className="input-grid">
                                    <div className="input-form">
                                        <div>
                                            Name
                      <br />
                                            <Field
                                                className="form-control"
                                                type="text"
                                                placeholder=""
                                                name="name"
                                                style={{ width: "32.55rem" }}
                                            />
                                            {errors.name && touched.name && errorMessage(errors.name)}
                                        </div>
                                    </div>
                                    <div>
                                        Email address
                    <br />
                                        <Field
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder=""
                                            validate={validateEmail}
                                        />
                                        {errors.email &&
                                            touched.email &&
                                            errorMessage(errors.email)}
                                    </div>
                                    <div>
                                        Phone No. <br />
                                        <Field
                                            className="form-control"
                                            type="tel"
                                            placeholder=""
                                            name="mobilenumber"
                                            validate={validateMobileNumber}
                                        />
                                        {errors.mobilenumber &&
                                            touched.mobilenumber &&
                                            errorMessage(errors.mobilenumber)}
                                    </div>

                                    <div style={{ fontSize: "12px" }}>
                                        Number of leads you generate in a month<br />
                                        <Field
                                            className="form-control"
                                            type="number"
                                            placeholder="-"
                                            name="leads"
                                        />
                                    </div>
                                    <div>
                                        Total leads in your CRM <br />
                                        <Field
                                            className="form-control"
                                            type="number"
                                            placeholder="-"
                                            name="leadsCRM"
                                        />
                                    </div>
                                    <div>
                                        Which CRM do you use <br />
                                        <Field
                                            className="form-control"
                                            type="number"
                                            placeholder="-"
                                            name="CRM"
                                        />
                                    </div>
                                    <div>
                                        No. of Agents <br />
                                        <Field
                                            className="form-control"
                                            type="number"
                                            placeholder="-"
                                            name="agents"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="checkboxes">
                                    <div id="checkbox-group">What are your biggest leads<br /></div>
                                    <div role="group" aria-labelledby="checkbox-group">
                                        <label className="check">
                                            <Field type="checkbox" name="sources" value="Zillow" />
                      Zillow
                    </label>
                                        <label className="check">
                                            <Field type="checkbox" name="sources" value="Realtor" />
                      Realtor
                    </label>
                                        <label className="check">
                                            <Field type="checkbox" name="sources" value="Ylopo" />
                      Ylopo
                    </label>
                                        <label className="check">
                                            <Field type="checkbox" name="sources" value="Others" />
                      Others
                    </label>
                                    </div>
                                    <br />
                                    <div id="checkbox-group">How did you hear about us? </div>
                                    <div role="group" aria-labelledby="checkbox-group">
                                        <label className="check">
                                            <Field type="checkbox" name="publicity" value="Google" />
                      Google
                    </label>
                                        <label className="check">
                                            <Field
                                                type="checkbox"
                                                name="publicity"
                                                value="Facebook"
                                            />
                      Facebook
                    </label>
                                        <label className="check">
                                            <Field type="checkbox" name="publicity" value="Email" />
                      Email
                    </label>
                                        <label className="check">
                                            <Field type="checkbox" name="publicity" value="Friends" />
                      Friends
                    </label>
                                        <label className="check">
                                            <Field
                                                type="checkbox"
                                                name="publicity"
                                                value="Real Closers"
                                            />
                      Real Closers
                    </label>
                                    </div>
                                    <br />
                                    <button style={{ background: "#ee5a36", color: "white", border: "1px solid #ee5a36", borderRadius: "1px", width: "4rem", height: "2rem" }} type="submit">
                                        Submit
                  </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik>
        </FormContainer>
    );
}

export default FormComp;

const FormContainer = styled.div`
  width: 40rem;
  color:#5a6e8f;
  font-weight:bold;
  justify-content: center;
  .invalid-feedback {
    display: block !important;
  }

  .container {

    display: flex;
    justify-content: center;
    font-size:small;
  }
  .form-control {
    width: 15rem;
  }
  .input-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  .input-form {
    width: auto;
  }
  .checkboxes{
      padding-left:3.5rem;
      justify-content:center;
  }
  .check {
      font-weight: 500;
      color:black;
  }
`;