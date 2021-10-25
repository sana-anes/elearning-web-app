import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateProfile } from "../../services/admin.service";
import * as Yup from "yup";

function EditName() {
  const { id, ch } = useParams();
  const history = useHistory();
  const redirectToAdd = () => {
    history.push("/admin/profile");
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
    console.log("pre")
    const registred = {
      firstName: values.firstName,
      lastName: values.lastName,
    }
console.log("pre2")
    updateProfile(registred, id , ch)
      .then(() => {
        window.location = "/admin/profile";
      })
      .catch(() => {console.log("errr")});
  }

  const formik = useFormik({ initialValues, onSubmit ,validationSchema});

  return (
      <div id="layoutSidenav_content">
        <main>
          <div className="col-md-offset-3 ">
            <form id="msform" onSubmit={formik.handleSubmit}>
              <fieldset>
                <h2 className="fs-title">Edit {ch}</h2>
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

export default EditName;
