import React from 'react'
import request from '../utils/student.util'
import {getToken} from './Auth.service'
let token = getToken();
//gettinhInfo
export async function getInfo(idStudent){
    try {
        const response = await request({
            method: 'GET',
            url: `/app/student/myprofile/${idStudent}`,
            headers: { Authorization: "Bearer " + token }

        })
        console.log(response);
        return response

    } catch (error) {
        throw (error.response || error.message)
    }
}
//UpdatinInfo
export async function updateProfile(student, idStudent) {
    try {
      console.log("debut");
      const response = await request({
        method: "POST",
        url: `/app/student/myprofile/${idStudent}`,
        data: student,
        headers: { Authorization: "Bearer " + token },
      });
      console.log({ response });
  
      return response;
  
    } catch (error) {
      throw error.response || error.message;
    }
  }
  //get coursesNotFinished
  export async function getMyCourses(idStudent) {
    try {
      const response = await request({ 
        method: 'GET',
        url: `/app/student/mycourses/${idStudent}`,
        headers: { Authorization: "Bearer " + token }

      })
      
      console.log(response)
  
      return response
    } catch (error) {
      throw (error.response || error.message)
    }
  }

  export async function getNomchapter(idStudent,idCourse) {
    try {
      const response = await request({ 
        method: 'GET',
        url: `/app/student/course/${idStudent}/${idCourse}`,
        headers: { Authorization: "Bearer " + token }
      })
      
      console.log(response)
  
      return response
    } catch (error) {
      throw (error.response || error.message)
    }
  }
//getchapter
export async function getCourse(idCourse) {
  try {
    const response = await request({ 
      method: 'GET',
      url: `/app/student/course/${idCourse}`,
      headers: { Authorization: "Bearer " + token }
    })
    
    console.log(response)

    return response
  } catch (error) {
    throw (error.response || error.message)
  }
}
export async function  ModifyCourseStudent(attributs,idStudent) {
  console.log(" add service")

  try {
    const response = await request({ 
      method: 'POST',
      data: attributs,
      url: `/app/ModifyCourseStudent/${idStudent}`,
      headers: { Authorization: "Bearer " + token }

    })
    console.log(" add retour service")
    console.log(response)

    return response
  } catch (error) {
    throw (error.response || error.message)
  }
}
export async function updateScore(sco,scoree,idStudent,idCourse) {
  console.log(" add service")

  try {
    const response = await request({ 
      method: 'POST',
      data: sco,
      url: `/app/updateScore/${idStudent}/${idCourse}/${scoree}/${sco}`,
      headers: { Authorization: "Bearer " + token }

    })
    console.log(" add retour service")
    console.log(response)

    return response
  } catch (error) {
    throw (error.response || error.message)
  }
}
export async function VerifCourse(idStudent,idCourse) {
  try {
    const response = await request({ 
      method: 'GET',
      url: `/app/${idStudent}/${idCourse}`,
      headers: { Authorization: "Bearer " + token }
    })
    
    console.log(response)

    return response
  } catch (error) {
    throw (error.response || error.message)
  }
}
export async function  addCourseToStudent(attributs,idStudent) {
  console.log(" add service")

  try {
    const response = await request({ 
      method: 'POST',
      data: attributs,
      url: `/app/addcourse/${idStudent}`,
      headers: { Authorization: "Bearer " + token }

    })
    console.log(" add retour service")
    console.log(response)

    return response
  } catch (error) {
    throw (error.response || error.message)
  }
}
export async function  addCourseFinishedToStudent(attributs,idStudent) {
  console.log(" add service")

  try {
    const response = await request({ 
      method: 'POST',
      data: attributs,
      url: `/app/addcourse/${idStudent}`,
      headers: { Authorization: "Bearer " + token }

    })
    console.log(" add retour service")
    console.log(response)

    return response
  } catch (error) {
    throw (error.response || error.message)
  }
}
