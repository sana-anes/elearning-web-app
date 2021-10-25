import request from '../utils/admin.util'

export async function getStudents() {
    try {
      const response = await request({ 
        method: 'GET',
        url: '/admin/studentlist'
      })
  
      const data = await response.data
      console.log(response.data)
  
      return response.data
    } catch (error) {
      throw (error.response || error.message)
    }
  }
  export async function deleteStudent(id){
    try {
        const response=await request ({
            method : 'DELETE',
            url:`/admin/studentlist/${id}`,
        })
        console.log({ response });

        // const data = await response.data
    } catch (error) {
        throw (error.response || error.message)
    }
}