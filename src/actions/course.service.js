import request from '../utils/student.util'

export async function getAllCourses() {
    try {
      const response = await request({ 
        method: 'GET',
        url: '/app/home/courses',
      })
     
      console.log(response)
  
      return response
    } catch (error) {
      throw (error.response || error.message)
    }
  }

  export async function getCoursesByLevel(level) {
    try {
      const response = await request({ 
        method: 'GET',
        url:`/app/home/course/${level}` ,
      })
     
      console.log(response)
  
      return response
    } catch (error) {
      throw (error.response || error.message)
    }
  }


//getFile
export async function getFile(imagePath){
  try {
      const response = await request({
          method: 'POST',
          url:'app/home/getfile',
          data: imagePath,
         responseType: 'blob'  
        
   
         })
         return response
  } catch (error) {
      throw (error.response || error.message)
  }
}
