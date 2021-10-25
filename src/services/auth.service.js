
import request from '../utils/admin.util'

 async function logIn(login){
        try {
            const response = await request({
                method: 'POST',
                url: '/form',
                data: login, 
            })
            console.log(response)
            
            localStorage.setItem("user" , JSON.stringify(response.data))
            return response
    
        } catch (error) {
            throw (error.response || error.message)
        }
    }
    
    function logOut() {
        localStorage.removeItem("user");
      }

      function   getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }
    
    //   module.export={logIn, logOut, getCurrentUser}
      export const AuthService = {logIn:logIn, logOut:logOut, getCurrentUser:getCurrentUser}