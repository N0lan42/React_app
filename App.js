import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";



function App() {
  // TODO: add a const called formik assigned to useFormik()
  // ADD: - The email input field should have an id of `emailField`
  // The email error message should be within a `div` element that has an id of `emailError`
  // The password input field should have an id of `pswField`
  // The password error message should be within a `div` element that has an id of `pswError`
  // The submit button should have an id of `submitBtn`
const formik = useFormik({
  initialValues: {
  
    emailField: '',
    pswField: '',
  },
  onSubmit: values => {
    console.log('form:', values);
  },
  validate: values => {
    let errors = {};
    if (!values.emailField) {
      errors.emailError = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailError = 'Username should be an email';
    }
    if (!values.pswField) { errors.pswError = 'Required';
  }
// checks if emailError and pswError are eqaul to an empty string
    if (formik.errors.emailError && formik.errors.pswError === '') {errors.loginy = 'Login Successful';
  }
      return errors;
    
  }
});
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
    <div>Username<input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailError} ></input>
    </div>
    {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div>: null}
    <div>Password<input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswError}></input>
      </div>   
      {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div>: null}
    <button type="submitBtn">Submit </button>
    <div>
     {formik.errors.loginy ? <div style={{color:'green'}}>{formik.errors.loginy}</div>: null}
    </div>
    

      </form>
    </div>
  );
}

export default App;
