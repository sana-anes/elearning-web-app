import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {AuthService} from '../../services/auth.service'
import { useHistory } from "react-router-dom";

function Form() {

  const history = useHistory();

  const redirectToAdd = () => {
    history.push("/admin/profile");
  };

    const initialValues = {
      email: "",
      password: ""
    };
    const validationSchema = Yup.object({
     
      email: Yup.string().email("Invalid email format").required("Required"),
        
    });
  
    function onSubmit(values) {

      const login = {
        email: values.email,
        password: values.password
      };

      AuthService.logIn(login).then(()=>{
          redirectToAdd() })
      .catch(()=>{
        console.log("hhfhsfhUFUsudgiUSGFGEZFYGZYf")
      })
      }
      const formik = useFormik({ initialValues, onSubmit, validationSchema });
      return (
        <div>
          <div id="layoutSidenav_content">
            <main>
              <div className="col-md-offset-3 ">
                <form id="msform" onSubmit={formik.handleSubmit}>
                  <fieldset>
                    <h2 className="fs-title">Open Session</h2>
                    <br />
                    <br />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <input
                      type="text"
                      name="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <input
                      type="submit"
                      name="submit"
                      className="submit action-button"
                      value="SAVE"
                    />
                    <br />
                  </fieldset>
                </form>
              </div>
            </main>
          </div>
        </div>
      );
    }
    
  


export default Form;
