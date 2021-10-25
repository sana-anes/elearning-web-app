import request from '../utils/teacher.util'

//---------------update profile----------------------

export async function updateTeacher(teacher){
    try {
        const response = await request({
            method: 'POST',
            url:"/teacher/updateProfile",
            data: teacher
        })
        console.log({ response });

        
    } catch (error) {
        throw (error.response || error.message)
    }
}
//----------get teacher info ---------------
export async function getTeacher(id) {
    try {
      const response = await request({ 
        method: 'GET',
        url: `/teacher/viewProfile/${id}`
      })
      const data = await response.data
      console.log(response.data)
  
      return response.data
    } catch (error) {
      throw (error.response || error.message)
    }
  }

  //---------- add new course----------------
  export async function addCourse(course){
    try {
        const response = await request({
            method: 'POST',
            url:"/teacher/addCourse",
            data: course
        })
        console.log({ response });

        
    } catch (error) {
        throw (error.response || error.message)
    }
}


//----------get all the course of a teacher------------
export async function getCourseByTeacher(id) {
  try {
    const response = await request({ 
      method: 'GET',
      url: `/teacher/courseList/${id}`
    })
    const data = await response.data
    console.log(data)

    return response.data
  } catch (error) {
    throw (error.response || error.message)
  }
}
//-----------------delete a course-----------------
export async function deleteCourse(id) {
  try {
    const response = await request({ 
      method: 'GET',
      url: `/teacher/deleteCourse/${id}`
    })
    const data = await response.message
    console.log(data)
    return response.data
  } catch (error) {
    throw (error.response || error.message)
  }
}
  
export async function editCourse(course){
  try {
      const response = await request({
          method: 'POST',
          url:"/teacher/editCourse",
          data: course
      })
      console.log({ response });

      
  } catch (error) {
      throw (error.response || error.message)
  }
}
//------------get single course---------------

export async function getCourse(id) {
  try {
    const response = await request({ 
      method: 'GET',
      url: `/teacher/getCourse/${id}`
    })
    const data = await response.data
    console.log(response.data)

    return response.data
  } catch (error) {
    throw (error.response || error.message)
  }
}
// upload file *****

export async function uploadFile(chapter){
  try {
      const response = await request({
          method: 'POST',
          url:"/teacher/uploadFile",
          data: chapter,
          dataType:'json',
      })
         return response
  } catch (error) {
      throw (error.response || error.message)
  }
}


//delete file
export async function deleteFile(path){
  try {
      const response = await request({
          method: 'POST',
          url:"/teacher/deleteFile",
          data: path,
          dataType:'json',
      })
         return response
  } catch (error) {
      throw (error.response || error.message)
  }
}



export async function getFile(imagePath){
  try {
      const response = await request({
          method: 'POST',
          url:"/teacher/getFile",
          data: imagePath,
         responseType: 'blob'  
        //dataType:'json',
   
         })
         return response
  } catch (error) {
      throw (error.response || error.message)
  }
}

//get the class of student


export async function getClass(info){
  try {
      const response = await request({
          method: 'POST',
          url:"/teacher/class",
          data: info,
        dataType:'json',
   
         })
         return response
  } catch (error) {
      throw (error.response || error.message)
  }
}