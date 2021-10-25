import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateProfile } from "../../services/admin.service";
import * as Yup from "yup";

function EditProfile() {
  const { id, ch } = useParams();
  const history = useHistory();
  const redirectToAdd = () => {
    history.push("/admin/profile");
  };
  
  const initialValues = {
    npass: "",
      cpass:""
  };
  const validationSchema = Yup.object({
    npass: Yup.string().required("Required").min(6),
    cpass: Yup.mixed()
      .test("match", "Passwords do not match", function (value) {
        return value === this.parent.npass;
      })
      .required("Password confirm is required"),
  });
  function onSubmit(values) {

    const registred = {

      npass: values.npass,
      cpass: values.cpass,
     
    }

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
                      type="password"
                      name="npass"
                      placeholder="New Password"
                      value={formik.values.npass}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.npass && formik.errors.npass ? (
                  <div className="error">{formik.errors.npass}</div>
                ) : null}
                    <input
                      type="password"
                      name="cpass"
                      placeholder="Confirm Password"
                      value={formik.values.cpass}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.cpass && formik.errors.cpass ? (
                  <div className="error">{formik.errors.cpass}</div>
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

export default EditProfile;
