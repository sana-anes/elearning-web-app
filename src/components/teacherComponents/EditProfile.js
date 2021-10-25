import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { withRouter,useHistory, useParams } from "react-router-dom";
import { updateTeacher } from "../../services/teacher.service";
import * as Yup from "yup";

 function EditProfile() {
    const { id } = useParams();
    const history = useHistory();
    const redirectToAdd = () => {
      history.push("/teacher/profile");
    };
    const initialValues = {
      firstName: "",
      lastName: "",
    };
    const validationSchema = Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
    });
    function onSubmit(values) {
      const update={
            userId:id,
            firstname: values.firstName,
             lastname: values.lastName,          
                }
            updateTeacher(update)
            .then((response) => {
              console.log(response)
              history.push('/teacher/profile')           
            })
            .catch((error) => {
                console.log(error);
              });
            }
    const formik = useFormik({ initialValues, onSubmit ,validationSchema});
  
    return (
        <div id="layoutSidenav_content">
          <main>
            <div className="col-md-offset-3 ">
              <form id="msform" onSubmit={formik.handleSubmit}>
                <fieldset>
                  <h2 className="fs-title">Edit</h2>
                  <br />
                  <br />
                  
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="error">{formik.errors.firstName}</div>
                  ) : null}
                          
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="error">{formik.errors.lastName}</div>
                  ) : null}
                    
  
                  <input
                    type="submit"
                    name="submit"
                    className="submit action-button"
                    value="SAVE"
                  />
                  <br />
                  {/* <a href="/admin/editpassword">Edit Password</a> */}
                </fieldset>
                <h3>
                  <a href="" onClick={redirectToAdd}>
                    <i className="fas fa-arrow-circle-left"></i>
                  </a>
                </h3>
              </form>
            </div>
          </main>
        </div>
    );
  }
  export default withRouter(EditProfile)