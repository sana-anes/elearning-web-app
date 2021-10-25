import React , { useState ,useEffect}from 'react'
import EditChapter from "./EditChapter";
import { getCourse ,editCourse, deleteFile} from "../../services/teacher.service";
import {withRouter ,useHistory,useParams} from 'react-router-dom';

function EditCourse() {
    let {idC}= useParams()
    const history=useHistory();


    useEffect(() => {      

        if(idC !== undefined){  
      
          getCourse(idC)
          .then((response) => {
             setCourseState({
              _id: response.response._id,
              title: response.response.title,
              topic: response.response.topic,
              level: response.response.level,
              language: response.response.language,
              description: response.response.description,

              estimatedTime: response.response.estimatedTime,
              image:response.response.image,
              chapters:response.response.chapters,
            });
            console.log(courseState);
            response.response.chapters.map((item,index)=>{
                setChaptersState([...chaptersState, {chapterID:index}])

            })

          })
          .catch((error) => {
            console.log(error);
          });

        }


          },[]);




 
//course---------------------------

    const [courseState, setCourseState] = useState({});
    const [updateImage,setUpdateImage]=useState(false)


      const handleCourseChange = (e) => {setCourseState({
        ...courseState,
        [e.target.name]: e.target.value,
      });
   
    }


    const chapter =  { 
      chapterID: 0,
  };
    const [chaptersState, setChaptersState] = useState([
       {...chapter}
      ]);

   
      const addChapter = () => {
        setChaptersState([...chaptersState, {chapterID:chaptersState.length}]);
      };
      const removeChapter = (e) => {
        var chaptrs =courseState.chapters ;
        //chaptrs.splice(i, 1);
            setChaptersState({...courseState, chapters:chaptrs});
        
        setChaptersState(chaptersState-1);
      };

      function saveChapter(info,index){   //save the order of the chapters
        console.log(info);

          const chapterss = courseState.chapters;

         chapterss[index]= info;
  
          setCourseState({...courseState,chapters:chapterss})
        

        }


        const [image ,setImage]=useState('')
        
        const handleImageChange=(e)=>{
         
            const image = e.target.files[0];
            if (!image) {
            console.log('image is required');
            return false;
            }else{
              if(
                e.target.files[0].name.toLowerCase().replace(/ /g, '_')!==courseState.image.name 
                && courseState.image)

            { setUpdateImage(true);
              
              if(image.name.match(/\.(jpg|jpeg|png|gif)$/)){
              setImage(e.target.files[0]);                     
             }


              }else{
                console.log('select valid image.');
                return false;

              }  

            }
        
        }


      const submitHandler = (e) => {
        e.preventDefault() //prevent the default behaviour of a form : redirect to other page
      
        const fd = new FormData() 
        fd.append('_id',courseState._id);
        fd.append('title', courseState.title)
        fd.append('topic', courseState.topic)
        fd.append('level', courseState.level)
        fd.append('language', courseState.language)
        fd.append('description', courseState.description)
        fd.append('estimatedTime',courseState.estimatedTime)
        fd.append('img',JSON.stringify(courseState.image))
        fd.append('chapters',JSON.stringify(courseState.chapters) )


      if(updateImage){
        deleteFile({
          path:courseState.image.path
        })
      
        .then((response) => {
          console.log(response);
          })
        .catch((error) => {
            console.log(error);
          }); 

         fd.append('image', image)


      }


     
         editCourse(fd)
         .then((response) => {     
           console.log("updated successfully")
           console.log(response)
           history.push('/teacher/courses')           
          })
         .catch((error) => {
             console.log("updating failed");
           });


        }

              
    return (
        <div id="layoutSidenav_content">
        <main>
      
        
            <form id="msform" onSubmit={submitHandler} encType='multipart/form-data' method='post'>
                <fieldset>
                    <h2 className="fs-title">New Course</h2>
                    <input type="text" name="title" placeholder="Title"  
                          value={courseState.title} 
                          onChange={handleCourseChange}/>
                         
                    {/* {errors.title && <span className="error">This field is required</span>} */}

                    {/* <input type="text" name="topic" placeholder="Topic"
                          value={courseState.topic} 
                          onChange={handleCourseChange}/> */}
                          <select className="selection"
                                value={courseState.topic}
                                onChange={e => setCourseState({...courseState,topic:e.currentTarget.value})}
                      >

<option value="Data Science">Data Science</option>
<option value="Development">Development</option>
<option value="HealthCare">HealthCare</option>

                      </select>

                      <select className="selection"
                                value={courseState.level}
                                onChange={e => setCourseState({...courseState,level:e.currentTarget.value})}
                      >

<option value="II1">II1</option>
<option value="II2">II2</option>
<option value="II3">II3</option>
<option value="M1">M1</option>
<option value="M2">M2</option>


                      </select>





                    {/* {errors.topic && <span className="error">This field is required</span>} */}

                    <input type="text" name="language" placeholder="Language" 
                          value={courseState.language} 
                          // {...register("language", { required: true, maxLength: 20 })}
                          onChange={handleCourseChange}/>
                    {/* {errors.language && <span className="error">This field is required</span>} */}

                    <input type="text" name="description" placeholder="Description" 
                          value={courseState.description} 
                          onChange={handleCourseChange}/>



                    <input type="number" name="estimatedTime" placeholder="Estimated time" 
                          value={courseState.estimatedTime}  
                          // {...register("estimatedTime", {required: true, min: 1, max: 99 })}
                          onChange={handleCourseChange}/>                      
                    {/* {errors.estimatedTime && <span className="error">This field is required</span>} */}
                    <div>
  {/* <label for="files" class="btn">Select Image</label> */}
  <input id="files" type="file"   
                    name="image" 
                    onChange={handleImageChange} />
</div>
                



                       {courseState.chapters?(
                            chaptersState.map((val, idx) => {
                            
                              console.log(courseState.chapters[idx]);

                                return (
                                    <EditChapter key ={idx}  chapter={courseState.chapters[idx]} onChange={chapter =>saveChapter(chapter,idx)}/>

                              ) ;    
                            })
                       ):''
                        }
                    <input type="button" name="newChapter" className="action-button-next" value="Add chapter" 
                    onClick={
                      addChapter
                    }
                    />
                    <input type="submit" name="submit" className="submit action-button" value="update course" />            
        </fieldset>

</form>
  
</main>
</div>

   
    )
}
export default withRouter(EditCourse)


