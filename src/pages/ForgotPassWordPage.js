import React from 'react'
import ForgotPassWord from '../components/studentComponents/ForgotPassWord';

function ForgotPassWordPage() {
    return (
        <div>
        <div>
          <div class="card bg-dark text-white">
            {/* <img
              src="./assets/img/sign-in.jpg"
              class="card-img"
              alt="Beauty-picture"
            /> */}
            <div class="card-img-overlay">
              <ForgotPassWord/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ForgotPassWordPage