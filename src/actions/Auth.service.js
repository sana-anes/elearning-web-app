import React from 'react'
import request from '../utils/student.util'
import decode from 'jwt-decode'

export function getToken() {
    return JSON.parse(localStorage.getItem('user'))
}

export function isTokenExpired (token) {
    try {            
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
            logout()
            return true;
        }
        else
            return false;
    }
    catch (err) {
        console.log("expired check failed! Line 42: AuthService.js");
        return false;
    }
}
export function logout() {
    localStorage.removeItem('user');
}


//signIn
export async function logIn(login){
    try {
        const response = await request({
            method: 'POST',
            url: '/app/signin',
            data: login, 
        })
        console.log(response);
        if(response.data.message==="admin"){

            localStorage.setItem("user" , JSON.stringify(response.data.userToken))

        }
        if(response.data.message==="loggedinAsStudent"){     
               localStorage.setItem("user" , JSON.stringify(response.data.token))
    }
    if(response.data.message==="loggedinAsTeacher"){     
        localStorage.setItem("user" , JSON.stringify(response.data.token))
}
        return response

    } catch (error) {
        throw (error.response || error.message)
    }
}

//signUp
export async function register(login){
    try {
        const response = await request({
            method: 'POST',
            url: '/app/signup',
            data: login, 
        })
        console.log(response);
                return response

    } catch (error) {
        throw (error.response || error.message)
    }
}


