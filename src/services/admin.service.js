import request from "../utils/admin.util";
import { userService } from "./auth.header";

let token = userService.getToken();

export async function postTeacher(teacher) {
  try {
    const response = await request({
      method: "POST",
      url: "/admin/addteacher",
      data: teacher,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });

    const data = await response.data;
    if ((data.name == "MongoError", data.keyPattern.email == 1)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function postData(email) {
  try {
    const response = await request({
      method: "POST",
      url: "/admin/addData",
      data: email,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });

    const data = await response.data;

  } catch (error) {
    throw error.response || error.message;
  }
}
export async function getTeachers() {
  try {
    console.log(token.token);

    const response = await request({
      method: "GET",
      url: "/admin/teacherlist",
      headers: { Authorization: "Bearer " + token.token },
     
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}


export async function searchTeacher(ch) {
  try {
    console.log(token.token);
console.log(ch)
    const response = await request({
      method: "GET",
      url: `/admin/searchteacher/${ch}`,
      headers: { Authorization: "Bearer " + token.token },
     
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}

export async function searchCourse(ch) {
  try {
    const response = await request({
      method: "GET",
      url: `/admin/searchcourse/${ch}`,
      headers: { Authorization: "Bearer " + token.token },
     
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function SearchStudents(ch) {
  try {
    const response = await request({
      method: "GET",
      url: `/admin/searchstudent/${ch}`,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function deleteTeacher(id) {
  try {
    const response = await request({
      method: "DELETE",
      url: `/admin/teacherlist/${id}`,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });

    // const data = await response.data
  } catch (error) {
    throw error.response || error.message;
  }
}

export async function getCourses() {
  try {
    const response = await request({
      method: "GET",
      url: "/admin/courselist",
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}

export async function getCourse(id) {
  try {
    const response = await request({
      method: "GET",
      url: `/admin/coursechapters/:coursename/${id}`,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function deleteCourse(id) {
  try {
    const response = await request({
      method: "DELETE",
      url: `/admin/courselist/${id}`,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });

    // const data = await response.data
  } catch (error) {
    throw error.response || error.message;
  }
}

export async function getStudents() {
  try {
    const response = await request({
      method: "GET",
      url: "/admin/studentlist",
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log(token);
    const data = await response.data;
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function deleteStudent(id) {
  try {
    const response = await request({
      method: "DELETE",
      url: `/admin/studentlist/${id}`,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });

    // const data = await response.data
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function getInfo() {
  try {
    const response = await request({
      method: "GET",
      url: "/admin/profile/",
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });
    return response.data;
    // const data = await response.data
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function updateProfile(admin, id, ch) {
  try {
    console.log("debut");
    const response = await request({
      method: "POST",
      url: `/admin/editprofile/${id}/${ch}`,
      data: admin,
      headers: { Authorization: "Bearer " + token.token },
    });
    console.log({ response });

    return response;

    // const data = await response.data
  } catch (error) {
    throw error.response || error.message;
  }
}
export async function getCours(id) {
  try {
    const response = await request({ 
      method: 'GET',
      url: `/admin/getCourse/${id}`,
      headers: { Authorization: "Bearer " + token.token },

    })
    const data = await response.data
    console.log(response.data)

    return response.data
  } catch (error) {
    throw (error.response || error.message)
  }
}

export async function getFile(imagePath){
  try {
      const response = await request({
          method: 'POST',
          url:"/admin/getFile",
          data: imagePath,
          headers: { Authorization: "Bearer " + token.token },

         responseType: 'blob'  
        //dataType:'json',
   
         })
         return response
  } catch (error) {
      throw (error.response || error.message)
  }
}
